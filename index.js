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
  const lps = []

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
    lps.push(
      ...(chainData.lps ?? []).map((lp) => ({
        ...lp,
        chainID: chainData.chainID,
        network,
      }))
    )

    delete chainData['tokens']
    delete chainData['lps']

    chains[network][chainData.chainID] = chainData
  })

  // convert coins to json
  const coinsOutPath = './build/denoms.json'
  const coinsOut = {}
  const ibcDenomMapOutPath = './build/ibc.json'
  const ibcDenomMapOut = {}
  const lpsOutPath = './build/lps.json'
  const lpsOut = {}

  lps.forEach((lp) => {
    const { network, chainID, ...lpData } = lp

    if (typeof lpsOut[network] === 'undefined') {
      lpsOut[network] = {}
    }

    const lpId = [chainID, lpData.token].join(':')
    lpsOut[network][lpId] = { ...lpData, chainID }
  })

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

    // add IBC denom on Terra

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
        const ibcDenom = calculateIBCDenom(channel, coinData.token)
        ibcDenomMapOut[network][ibcDenom] = {
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

          ibcDenomMapOut[network][ibcDenom] = {
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
  const jsonList = JSON.stringify(chains, null, 2)
  await fs.writeFile(chainsOutPath, jsonList)
  const coinsList = JSON.stringify(coinsOut, null, 2)
  await fs.writeFile(coinsOutPath, coinsList)
  const ibcList = JSON.stringify(ibcDenomMapOut, null, 2)
  await fs.writeFile(ibcDenomMapOutPath, ibcList)
  const lpList = JSON.stringify(lpsOut, null, 2)
  await fs.writeFile(lpsOutPath, lpList)
  const currenciesList = require('./currencies.js')
  await fs.writeFile(
    './build/currencies.json',
    JSON.stringify(currenciesList, null, 2)
  )

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
