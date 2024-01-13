module.exports = {
  chainID: 'dydx-mainnet-1',
  lcd: 'https://lcd-dydx.tfl.foundation',
  gasAdjustment: 1.5,
  gasPrices: {
    adydx: 12500000000,
    // uncomment this when noble is supported
    // 'ibc/8E27BA2D5493AF5636760E354E46004562C46AB7EC0CC4C1CA14E9E20E2545B5': 0.025,
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
      token: "adydx",
      name: "dYdX",
      symbol: "DYDX",
      decimals: 18,
      icon: process.env.CF_PAGES_URL + "/img/coins/dydx.svg"
    }
  ],
}
