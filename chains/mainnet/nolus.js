module.exports = {
  chainID: 'pirin-1',
  lcd: 'https://nolus-rest.publicnode.com',
  gasAdjustment: 1.5,
  gasPrices: { unls: 0.025 },
  prefix: 'nolus',
  coinType: '118',
  baseAsset: 'unls',
  name: 'Nolus',
  icon: process.env.CF_PAGES_URL + '/img/chains/Nolus.svg',
  channels: {
    'osmosis-1': 'channel-0',
    'neutron-1': 'channel-3839',
  },
  ics20Channels: {},
  explorer: {
    address: 'https://ping.pub/nolus/account/{}',
    tx: 'https://ping.pub/nolus/tx/{}',
    validator: 'https://ping.pub/nolus/staking/{}',
    block: 'https://ping.pub/nolus/block/{}',
  },
  tokens: [
    {
      token: 'unls',
      symbol: 'NLS',
      name: 'Nolus',
      icon: process.env.CF_PAGES_URL + '/img/coins/Nolus.svg',
      decimals: 6,
    },
  ],
}
