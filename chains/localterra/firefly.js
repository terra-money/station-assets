module.exports = {
  chainID: 'firefly-1',
  lcd: 'http://localhost:8000/api/v1/firefly-1',
  gasAdjustment: 1.75,
  gasPrices: { ufire: 0.015 },
  prefix: 'firefly',
  coinType: '118',
  baseAsset: 'ufire',
  name: 'Firefly',
  icon: process.env.CF_PAGES_URL + '/img/chains/Firefly.png',
  channels: {
    'localterra': 'channel-0',
    'silverbolt-1': 'channel-1',
    'skydive-1': 'channel-2',
  },
  explorer: {
    address: process.env.FND_BASE_URL + '/Firefly/address/{}',
    tx: process.env.FND_BASE_URL + '/Firefly/tx/{}',
    validator: process.env.FND_BASE_URL + '/Firefly/validator/{}',
    block: process.env.FND_BASE_URL + '/Firefly/block/{}',
  },
  tokens: [
    {
      token: 'ufire',
      symbol: 'FIRE',
      name: 'Firefly',
      icon: process.env.CF_PAGES_URL + '/img/chains/Firefly.png',
      decimals: 6,
    },
  ],
}
