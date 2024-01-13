module.exports = {
  chainID: 'cheqd-mainnet-1',
  lcd: 'https://lcd-cheqd.tfl.foundation',
  gasAdjustment: 1.5,
  gasPrices: { ncheq: 75 },
  prefix: 'cheqd',
  coinType: '118',
  baseAsset: 'ncheq',
  name: 'Cheqd',
  icon: process.env.CF_PAGES_URL + '/img/chains/Cheqd.svg',
  channels: {
    'phoenix-1': 'channel-34',
    'osmosis-1': 'channel-0',
  },
  explorer: {
    address: 'https://explorer.cheqd.io/accounts/{}',
    tx: 'https://explorer.cheqd.io/transactions/{}',
    validator: 'https://explorer.cheqd.io/validators/{}',
    block: 'https://explorer.cheqd.io/blocks/{}',
  },
  tokens: [
    {
      token: 'ncheq',
      symbol: 'CHEQ',
      name: 'Cheq',
      icon: process.env.CF_PAGES_URL + '/img/coins/Cheqd.svg',
      decimals: 9,
    },
  ],
}
