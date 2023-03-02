module.exports = {
  chainID: 'carbon-1',
  lcd: 'https://query-api.carbon.network/',
  gasAdjustment: 1.75,
  gasPrices: { swth: 100000000 },
  prefix: 'swth',
  coinType: '118',
  baseAsset: 'swth',
  name: 'Carbon',
  icon: 'https://switcheo-assets.s3.ap-southeast-1.amazonaws.com/Carbon.svg',

  ibc: {
    fromTerra: 'channel-36',
    toTerra: 'channel-12',
  }
}
