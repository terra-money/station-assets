module.exports = {
  chainID: 'localterra',
  lcd: 'http://localhost:1317',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.15 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'LocalTerra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  explorer: {
    address: "https://finder.terra.money/localterra/address/{}",
    tx: "https://finder.terra.money/localterra/tx/{}",
    validator: "https://finder.terra.money/localterra/validator/{}",
    block: "https://finder.terra.money/localterra/block/{}",
  }
}
