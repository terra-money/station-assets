module.exports = {
  chainID: 'stargaze-1',
  lcd: 'https://lcd-stargaze.tfl.foundation',
  gasAdjustment: 1.5,
  gasPrices: { ustars: 1 },
  prefix: 'stars',
  coinType: '118',
  baseAsset: 'ustars',
  name: 'Stargaze',
  icon: process.env.CF_PAGES_URL + '/img/chains/Stargaze.svg',
  channels: {
    'phoenix-1': 'channel-266',
  },
  explorer: {
    address: 'https://www.mintscan.io/stargaze/account/{}',
    tx: 'https://www.mintscan.io/stargaze/txs/{}',
    validator: 'https://www.mintscan.io/stargaze/validators/{}',
    block: 'https://www.mintscan.io/stargaze/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ustars',
      symbol: 'STARS',
      name: 'Stargaze',
      icon: process.env.CF_PAGES_URL + '/img/coins/Stargaze.svg',
      decimals: 6,
    },
  ],
}
