module.exports = {
  chainID: 'silverbolt-1',
  lcd: 'http://localhost:41217',
  gasAdjustment: 1.75,
  gasPrices: { usilv: 0.015 },
  prefix: 'silverbolt',
  coinType: '118',
  baseAsset: 'usilv',
  name: 'Silverbolt',
  icon: process.env.CF_PAGES_URL + '/img/chains/Silverbolt.png',
  channels: {
    'localterra': 'channel-0',
    'firefly-1': 'channel-1',
    'skydive-1': 'channel-2',
  },
  explorer: {
    address: process.env.FND_BASE_URL + '/Silverbolt/address/{}',
    tx: process.env.FND_BASE_URL + '/Silverbolt/tx/{}',
    validator: process.env.FND_BASE_URL + '/Silverbolt/validator/{}',
    block: process.env.FND_BASE_URL + '/Silverbolt/block/{}',
  },
  tokens: [
    {
      token: 'usilv',
      symbol: 'SILV',
      name: 'silverbolt',
      icon: process.env.CF_PAGES_URL + '/img/chains/Silverbolt.png',
      decimals: 6,
    },
  ],
}
