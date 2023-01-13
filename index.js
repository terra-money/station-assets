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

  chainFiles.forEach((file) => {
    const [_, folder, network, fileName] = file.split('/')

    if (typeof chains[network] === 'undefined') {
      chains[network] = {}
    }

    const fullPath = `./${file}`
    const chainData = require(fullPath)
    chains[network][chainData.chainID] = chainData
  })

  // convert coins to json
  const coinsOutPath = './build/coins.json'
  const coinsOut = {}
  const ibcDenomMapOutPath = './build/ibc_denoms.json'
  const ibcDenomMapOut = {}

  const coinsFile = await glob('./coins/*/*.js')

  coinsFile.forEach((file) => {
    const [_, folder, network, fileName] = file.split('/')

    if (typeof coinsOut[network] === 'undefined') {
      coinsOut[network] = {}
    }
    if (typeof ibcDenomMapOut[network] === 'undefined') {
      ibcDenomMapOut[network] = {}
    }

    const fullPath = `./${file}`
    const coinData = require(fullPath)
    coinsOut[network][coinData.token] = coinData

    // add IBC denom on Terra
    coinData.chains.map((chainID) => {
      const isICS = AccAddress.validate(coinData.token)

      if (!isICS && chains[network][chainID].ibc) {
        const ibcDenomOnTerra = calculateIBCDenom(
          chains[network][chainID].ibc.fromTerra,
          coinData.token,
        )

        ibcDenomMapOut[network][ibcDenomOnTerra] = {
          token: coinData.token,
          chainID: Object.values(chains[network]).find(
            ({ prefix }) => prefix === 'terra',
          ).chainID,
        }

        // add IBC denom on other chains
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (!chains[network][chainID2].ibc || chainID === chainID2) return

          const ibcDenomOnOther = calculateIBCDenom(
            chains[network][chainID2].ibc.toTerra,
            ibcDenomOnTerra,
          )
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: coinData.token,
            chainID: chainID2,
          }
        })
      } if (isICS && chains[network][chainID]?.ibc?.ics) {
        const ibcDenomOnTerra = calculateIBCDenom(
          chains[network][chainID].ibc.ics.fromTerra,
          `cw20:${coinData.token}`,
        )

        ibcDenomMapOut[network][ibcDenomOnTerra] = {
          token: coinData.token,
          chainID: Object.values(chains[network]).find(
            ({ prefix }) => prefix === 'terra',
          ).chainID,
          // to send it back on the original chain
          icsChannel: chains[network][chainID].ibc.ics.fromTerra,
        }

        // add IBC denom on other chains
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (!chains[network][chainID2].ibc || chainID === chainID2) return

          const ibcDenomOnOther = calculateIBCDenom(
            chains[network][chainID2].ibc.toTerra,
            ibcDenomOnTerra,
          )
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: coinData.token,
            chainID: chainID2,
          }
        })
      } else if (chains[network][chainID].prefix === 'terra') {
        // add IBC denom on other chains
        Object.values(chains[network]).forEach(({ chainID: chainID2 }) => {
          if (!chains[network][chainID2].ibc || chainID === chainID2) return

          const ibcDenomOnOther = calculateIBCDenom(
            chains[network][chainID2].ibc.toTerra,
            coinData.token,
          )
          ibcDenomMapOut[network][ibcDenomOnOther] = {
            token: coinData.token,
            chainID: chainID2,
          }
        })
      }
    })
  })

  // Format the JSON with indentions before writing.
  const jsonList = JSON.stringify(chains, null, 2)
  await fs.writeFile(chainsOutPath, jsonList)
  const coinsList = JSON.stringify(coinsOut, null, 2)
  await fs.writeFile(coinsOutPath, coinsList)
  const ibcList = JSON.stringify(ibcDenomMapOut, null, 2)
  await fs.writeFile(ibcDenomMapOutPath, ibcList)

  // copy images inside ./build
  const images = await glob('./img/*/*.{png,svg}')

  await Promise.all(
    images.map(async (file) => {
      await fs.mkdir(`./build/${path.dirname(file).replace('./', '')}`, { recursive: true })
      await fs.copyFile(file, `./build/${file.replace('./', '')}`)
    }),
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
