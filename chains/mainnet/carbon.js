module.exports = {
  chainID: 'carbon-1',
  lcd: 'https://query-api.carbon.network/',
  gasAdjustment: 1.75,
  gasPrices: { swth: 1000 },
  prefix: 'swth',
  coinType: '118',
  baseAsset: 'swth',
  name: 'Carbon',
  icon: 'https://switcheo-assets.s3.ap-southeast-1.amazonaws.com/Carbon.svg',
  ibc: {
    fromTerra: 'channel-36',
    toTerra: 'channel-12',
  },
  explorer: {
    address: 'https://scan.carbon.network/account/{}?net=main',
    tx: 'https://scan.carbon.network/transaction/{}?net=main',
    validator: 'https://scan.carbon.network/validator/{}?net=main',
    block: 'https://scan.carbon.network/block/{}?net=main',
  },
  tokens: [
    {
      token: 'swth',
      symbol: 'SWTH',
      name: 'Carbon',
      icon: 'https://station-assets.terra.money/img/chains/Carbon.png',
      decimals: 8,
    },
  ],
}
