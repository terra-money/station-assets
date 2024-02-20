module.exports = {
  chainID: 'mars-1',
  lcd: 'https://lcd-mars.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { umars: 0 },
  prefix: 'mars',
  coinType: '330',
  baseAsset: 'umars',
  name: 'Mars',
  icon: process.env.CF_PAGES_URL + '/img/chains/Mars.svg',
  channels: {
    'phoenix-1': 'channel-2',
    'crescent-1': 'channel-5',
    'kaiyo-1': 'channel-0',
    'osmosis-1': 'channel-1',
    'neutron-1': 'channel-37',
  },
  explorer: {
    address: 'https://explorer.marsprotocol.io/accounts/{}',
    tx: 'https://explorer.marsprotocol.io/transactions/{}',
    validator: 'https://explorer.marsprotocol.io/validators/{}',
    block: 'https://explorer.marsprotocol.io/blocks/{}',
  },
  tokens: [
    {
      token: 'umars',
      symbol: 'MARS',
      name: 'Mars',
      icon: process.env.CF_PAGES_URL + '/img/coins/Mars.svg',
      decimals: 6,
    },
  ],
}
