const glob = require('glob-promise')
const path = require('path')
const { Buffer } = require('buffer')
const { Hash } = require('@keplr-wallet/crypto')
const { AccAddress } = require('@terra-money/feather.js')
const fs = require('fs').promises

;(async () => {
  // create build directory
  fs.mkdir('./build', { recursive: true })

  // convert chains to json
  const chains = {}
  const chainsOutPath = './build/chains.json'

  const chainFiles = await glob('./chains/*/*.js')
  const tokens = []

  chainFiles.forEach((file) => {
    const [_, folder, network, fileName] = file.split('/')

    if (typeof chains[network] === 'undefined') {
      chains[network] = {}
    }

    const fullPath = `./${file}`
    const chainData = require(fullPath)

    if (network !== 'localterra' && !isValidUrl(chainData.lcd)) {
      console.log(`${chainData.chainID}: Invalid LCD URL: ${chainData.lcd}`)
      return
    }
    tokens.push(
      ...(chainData.tokens ?? []).map((t) => ({
        ...t,
        chainID: chainData.chainID,
        network,
      }))
    )

    delete chainData['tokens']

    chains[network][chainData.chainID] = chainData
  })

  // convert coins to json
  const coinsOutPath = './build/denoms.json'
  const coinsOut = {}
  const ibcDenomMapOutPath = './build/ibc.json'
  const ibcDenomMapOutPathV2 = './build/ibc_tokens.json'
  const ibcDenomMapOut = {}

  tokens.forEach((token) => {
    const { network, chainID, ...coinData } = token

    if (typeof coinsOut[network] === 'undefined') {
      coinsOut[network] = {}
    }
    if (typeof ibcDenomMapOut[network] === 'undefined') {
      ibcDenomMapOut[network] = {}
    }

    const tokenId = [chainID, coinData.token].join(':')

    coinsOut[network][tokenId] = { ...coinData, chainID, chains: [chainID] }


    // chain is disabled
    if (!chains[network][chainID]) {
      console.log(`${chainID} used by ${coinData.token} is disabled.`)
      return
    }

    const isICS = AccAddress.validate(coinData.token)

    if (!isICS && chains[network][chainID]?.channels) {
      const channels = chains[network][chainID].channels
      Object.keys(channels).forEach((otherChainID) => {
        const channel = chains[network][otherChainID]?.channels?.[chainID]
        if (!channel) {
          console.error(
            `${otherChainID} doesn't have an IBC channel configured with ${chainID}.`
          )
          return
        }

        const denom = chains[network][chainID].prefix === "kujira" ? coinData.token?.replaceAll("/", ":") : coinData.token
        const ibcDenom = calculateIBCDenom(channel, denom)
        ibcDenomMapOut[network][`${otherChainID}:${ibcDenom}`] = {
          token: tokenId,
          chainID: otherChainID,
        }
      })
    } else if (isICS && chains[network][chainID]?.icsChannels) {
      const channels = chains[network][chainID].icsChannels
      const denom = `cw20:${coinData.token}`

      Object.entries(channels).forEach(
        ([otherChainID, { channel, otherChannel }]) => {
          const ibcDenom = calculateIBCDenom(otherChannel, denom)

          ibcDenomMapOut[network][`${otherChainID}:${ibcDenom}`] = {
            token: tokenId,
            chainID: otherChainID,
            // to send it back on the original chain
            icsChannel: channel,
          }
        }
      )
    }
  })

  // Format the JSON with indentions before writing.
  const jsonList = JSON.stringify(chains)
  await fs.writeFile(chainsOutPath, jsonList)
  const coinsList = JSON.stringify(coinsOut)
  await fs.writeFile(coinsOutPath, coinsList)
  const ibcList = JSON.stringify(
    Object.fromEntries(
      Object.keys(ibcDenomMapOut).map((networkName) => [
        networkName,
        Object.fromEntries(
          Object.entries(ibcDenomMapOut[networkName]).map(([k, v]) => [
            k.split(':')[1],
            v,
          ])
        ),
      ])
    )
  )
  await fs.writeFile(ibcDenomMapOutPath, ibcList)
  const ibcListV2 = JSON.stringify(ibcDenomMapOut)
  await fs.writeFile(ibcDenomMapOutPathV2, ibcListV2)
  const currenciesList = require('./currencies.js')
  await fs.writeFile('./build/currencies.json', JSON.stringify(currenciesList))

  // copy images inside ./build
  const images = [
    ...(await glob('./img/*/*.{png,svg}')),
    ...(await glob('./img/*.{png,svg}')),
  ]

  await Promise.all(
    images.map(async (file) => {
      await fs.mkdir(`./build/${path.dirname(file).replace('./', '')}`, {
        recursive: true,
      })
      await fs.copyFile(file, `./build/${file.replace('./', '')}`)
    })
  )
})()

function calculateIBCDenom(channel, denom) {
  return (
    'ibc/' +
    Buffer.from(Hash.sha256(Buffer.from(`transfer/${channel}/${denom}`)))
      .toString('hex')
      .toUpperCase()
  )
}

function isValidUrl(url) {
  try {
    return new URL(url).protocol === 'https:'
  } catch (e) {
    return false
  }
}
