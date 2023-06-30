module.exports = {
  chainID: 'pisco-1',
  lcd: 'https://pisco-lcd.terra.dev',
  gasAdjustment: 2,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra Testnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
  alliance: true,
  explorer: {
    address: 'https://terrasco.pe/testnet/address/{}',
    tx: 'https://terrasco.pe/testnet/tx/{}',
    validator: 'https://terrasco.pe/testnet/validator/{}',
    block: 'https://terrasco.pe/testnet/block/{}',
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Test Terra Luna',
      icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
      decimals: 6,
    }
  ],
}
