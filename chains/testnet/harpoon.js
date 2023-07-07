module.exports = {
  chainID: 'harpoon-4',
  lcd: 'https://kujira-testnet-rpc.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: {
    ukuji: 0.00119,
  },
  prefix: 'kujira',
  coinType: '118',
  baseAsset: 'ukuji',
  name: 'Kujira Testnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/Kujira.png',
  ibc: {},
  alliance: true,
  explorer: {
    address: 'https://finder.kujira.network/harpoon-4/address/{}',
    tx: 'https://finder.kujira.network/harpoon-4/tx/{}',
    validator: 'https://blue.kujira.network/stake/{}',
    block: 'https://finder.kujira.network/harpoon-4/block/{}',
  },
  tokens: [
    {
      token: 'ukuji',
      symbol: 'KUJI',
      name: 'Kujira',
      icon: process.env.CF_PAGES_URL + '/img/coins/Kuji.svg',
      decimals: 6,
    },
  ],
}
