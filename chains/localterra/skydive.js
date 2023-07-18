module.exports = {
  chainID: 'skydive-1',
  lcd: 'http://localhost:41317',
  gasAdjustment: 1.75,
  gasPrices: { uskyd: 0.15 },
  prefix: 'skydive',
  coinType: '118',
  baseAsset: 'uskyd',
  name: 'Skydive',
  icon: process.env.CF_PAGES_URL + '/img/chains/Skydive.png',
  channels: {
    'localterra': 'channel-0',
    'silverbolt-1': 'channel-1',
    'firefly-1': 'channel-2',
  },
  explorer: {
    address: process.env.FND_BASE_URL + '/v1/skydive/address/{}',
    tx: process.env.FND_BASE_URL + '/v1/skydive/tx/{}',
    validator: process.env.FND_BASE_URL + '/v1/skydive/validator/{}',
    block: process.env.FND_BASE_URL + '/skydive/block/{}',
  },
  tokens: [
    {
      token: 'uskyd',
      symbol: 'SKYD',
      name: 'Skydive',
      icon: process.env.CF_PAGES_URL + '/img/chains/Skydive.png',
      decimals: 6,
    },
  ],
}
