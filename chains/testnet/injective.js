module.exports = {
  chainID: 'injective-888',
  lcd: 'https://k8s.testnet.lcd.injective.network',
  gasAdjustment: 1.75,
  gasPrices: { inj: 1000000000 },
  prefix: 'inj',
  coinType: '60',
  baseAsset: 'inj',
  name: 'Injective',
  icon: process.env.CF_PAGES_URL + '/img/chains/Injective.svg',
  channels: {
    'indigo-1': 'channel-151'
  },
  explorer: {
    address: 'https://testnet.explorer.injective.network/account/{}',
    tx: 'https://testnet.explorer.injective.network/transaction/{}',
    validator: 'https://testnet.explorer.injective.network/block/{}',
    block: 'https://testnet.hub.injective.network/validators/{}',
  },
  tokens: [
    {
      token: 'inj',
      symbol: 'INJ',
      name: 'Injective',
      icon: process.env.CF_PAGES_URL + '/img/coins/Injective.svg',
      decimals: 18,
    },
  ],
}
