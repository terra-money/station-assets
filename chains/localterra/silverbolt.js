module.exports = {
  chainID: 'silverbolt-1',
  lcd: 'http://localhost:41217',
  gasAdjustment: 1.75,
  gasPrices: { usilv: 0.15 },
  prefix: 'silverbolt',
  coinType: '118',
  baseAsset: 'usilv',
  name: 'Silverbolt',
  icon: 'http://localhost:3101/icon/silverbolt.png',
  explorer: {
    address: 'https://localhost:3200/silverbolt/address/{}',
    tx: 'https://localhost:3200/silverbolt/tx/{}',
    validator: 'https://localhost:3200/silverbolt/validator/{}',
    block: 'https://localhost:3200/silverbolt/block/{}',
  },
  tokens: [
    {
      token: 'usilv',
      symbol: 'SILV',
      name: 'silverbolt',
      icon: 'http://localhost:3101/icon/silverbolt.png',
      decimals: 6,
    },
  ],
}
