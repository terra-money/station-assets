module.exports = {
  chainID: 'dydx-mainnet-1',
  lcd: 'https://dydx-rest.publicnode.com',
  gasAdjustment: 1.75,
  gasPrices: {
    adydx: 12500000000,
    'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5': 0.025,
  },
  prefix: 'dydx',
  coinType: '118',
  baseAsset: 'adydx',
  name: 'dYdX Protocol',
  icon: process.env.CF_PAGES_URL + '/img/chains/dydx.svg',
  channels: {
    'kaiyo-1': 'channel-5',
    'noble-1': 'channel-0',
    'osmosis-1': 'channel-3',
    'stride-1': 'channel-1',
    'phoenix-1': 'channel-9',
  },
  icsChannels: {},
  explorer: {
    address: 'https://www.mintscan.io/dydx/account/{}',
    tx: 'https://www.mintscan.io/dydx/txs/{}',
    validator: 'https://www.mintscan.io/dydx/validators/{}',
    block: 'https://www.mintscan.io/dydx/blocks/id/{}',
  },
  tokens: [
    {
      token: 'adydx',
      symbol: 'DYDX',
      name: 'dYdX',
      icon: process.env.CF_PAGES_URL + '/img/coins/dydx.svg',
      decimals: 18,
    },
  ],
}
