module.exports = {
  chainID: 'celestia',
  lcd: 'https://lcd-celestia.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { utia: 0.2 },
  prefix: 'celestia',
  coinType: '118',
  baseAsset: 'utia',
  name: 'Celestia',
  icon: process.env.CF_PAGES_URL + '/img/chains/Celestia.svg',
  channels: {
    'osmosis-1': 'channel-2',
  },
  icsChannels: {},
  explorer: {
    address: 'https://www.mintscan.io/celestia/account/{}',
    tx: 'https://www.mintscan.io/celestia/txs/{}',
    validator: 'https://www.mintscan.io/celestia/validators/{}',
    block: 'https://www.mintscan.io/celestia/blocks/id/{}',
  },
  tokens: [
    {
      token: 'utia',
      symbol: 'TIA',
      name: 'Celestia',
      icon: process.env.CF_PAGES_URL + '/img/coins/Celestia.svg',
      decimals: 6,
    },
  ],
}
