module.exports = {
  chainID: 'comdex-1',
  lcd: 'https://rest.comdex.one',
  gasAdjustment: 1.75,
  gasPrices: { ucmdx: 0.0025 },
  prefix: 'comdex',
  coinType: '118',
  baseAsset: 'ucmdx',
  name: 'Comdex',
  icon: 'https://station-assets.terra.money/img/chains/Comdex.svg',
  ibc: {
    fromTerra: 'channel-39',
    toTerra: 'channel-51',
  },
}
