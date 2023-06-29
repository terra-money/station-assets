module.exports = {
  chainID: 'skydive-1',
  lcd: 'http://localhost:41317',
  gasAdjustment: 1.75,
  gasPrices: { uskyd: 0.15 },
  prefix: 'skydive',
  coinType: '118',
  baseAsset: 'uskyd',
  name: 'Skydive',
  icon: 'http://localhost:3101/icon/skydive.png',
  explorer: {
    address: 'https://localhost:3200/skydive/address/{}',
    tx: 'https://localhost:3200/skydive/tx/{}',
    validator: 'https://localhost:3200/skydive/validator/{}',
    block: 'https://localhost:3200/skydive/block/{}',
  },
  tokens: [
    {
      token: 'uskyd',
      symbol: 'SKYD',
      name: 'Skydive',
      icon: 'http://localhost:3101/icon/skydive.png',
      decimals: 6,
    },
  ],
}
