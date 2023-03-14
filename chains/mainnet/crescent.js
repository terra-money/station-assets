module.exports = {
  chainID: 'crescent-1',
  lcd: 'https://mainnet.crescent.network:1317',
  gasAdjustment: 1.75,
  gasPrices: { ucre: 0.01 },
  prefix: 'cre',
  coinType: '118',
  baseAsset: 'ucre',
  name: 'Crescent',
  icon: 'https://station-assets.terra.money/img/chains/Crescent.svg',
  ibc: {
    fromTerra: 'channel-37',
    toTerra: 'channel-27',
  },
  explorer: {
    address: 'https://www.mintscan.io/crescent/account/{}',
    tx: 'https://www.mintscan.io/crescent/txs/{}',
    validator: 'https://www.mintscan.io/crescent/validators/{}',
    block: 'https://www.mintscan.io/crescent/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ucre',
      symbol: 'CRE',
      name: 'Crescent',
      icon: 'https://station-assets.terra.money/img/coins/Crescent.svg',
      decimals: 6,
    },
  ],
}
