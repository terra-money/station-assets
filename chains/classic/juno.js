module.exports = {
  chainID: 'juno-1',
  lcd: 'https://lcd-juno.mib.tech',
  gasAdjustment: 1.75,
  gasPrices: { ujuno: 0.0025 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujuno',
  name: 'Juno',
  icon: process.env.CF_PAGES_URL + '/img/chains/Juno.svg',
  ibc: {
    fromTerra: 'channel-20',
    toTerra: 'channel-27',
  },
  explorer: {
    address: "https://www.mintscan.io/juno/account/{}",
    tx: "https://www.mintscan.io/juno/txs/{}",
    validator: "https://www.mintscan.io/juno/validators/{}",
    block: "https://www.mintscan.io/juno/blocks/id/{}",
  }
}
