module.exports = {
  chainID: 'localterra',
  lcd: 'http://localhost:41017',
  gasAdjustment: 1.75,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'LocalTerra',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  channels: {
    'silverbolt-1': 'channel-0',
    'firefly-1': 'channel-1',
    'skydive-1': 'channel-2',
  },
  explorer: {
    address: process.env.FND_BASE_URL + '/LocalTerra/address/{}',
    tx: process.env.FND_BASE_URL + '/v1/LocalTerra/tx/{}',
    validator: process.env.FND_BASE_URL + '/LocalTerra/validator/{}',
    block: process.env.FND_BASE_URL + '/LocalTerra/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    },
  ],
}
