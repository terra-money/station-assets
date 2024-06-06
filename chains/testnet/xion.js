module.exports = {
  chainID: 'xion-testnet-1',
  lcd: 'https://api.xion-testnet-1.burnt.com',
  gasAdjustment: 2,
  gasPrices: { uxion: 0.015 },
  prefix: 'xion',
  coinType: '118',
  baseAsset: 'uxion',
  name: 'XION',
  icon: process.env.CF_PAGES_URL + '/img/coins/XION.png',
  explorer: {
    address: 'https://explorer.burnt.com/xion-testnet-1/account/{}',
    tx: 'https://explorer.burnt.com/xion-testnet-1/transaction/{}',
    validator: 'https://explorer.burnt.com/xion-testnet-1/validator/{}',
    block: 'https://explorer.burnt.com/xion-testnet-1/block/{}',
  },
  tokens: [
    {
      token: 'uxion',
      symbol: 'XION',
      name: 'XION',
      icon: process.env.CF_PAGES_URL + '/img/coins/XION.png',
      decimals: 6,
    },
  ],
}
