module.exports = {
  chainID: 'localterra',
  lcd: 'http://localhost:1317',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'LocalTerra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  explorer: {
    address: 'https://finder.station.money/localterra/address/{}',
    tx: 'https://finder.station.money/localterra/tx/{}',
    validator: 'https://finder.station.money/localterra/validator/{}',
    block: 'https://finder.station.money/localterra/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
  ],
}
