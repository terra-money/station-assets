module.exports = {
  chainID: 'firefly-1',
  lcd: 'http://localhost:41117',
  gasAdjustment: 1.75,
  gasPrices: { ufire: 0.15 },
  prefix: 'firefly',
  coinType: '330',
  baseAsset: 'ufire',
  name: 'Firefly',
  icon: 'http://localhost:3101/icon/firefly.png',
  explorer: {
    address: 'https://localhost:3200/firefly/address/{}',
    tx: 'https://localhost:3200/firefly/tx/{}',
    validator: 'https://localhost:3200/firefly/validator/{}',
    block: 'https://localhost:3200/firefly/block/{}',
  },
  tokens: [
    {
      token: 'ufire',
      symbol: 'FIRE',
      name: 'Firefly',
      icon: 'http://localhost:3101/icon/firefly.png',
      decimals: 6,
    },
  ],
}
