module.exports = {
  chainID: 'andromeda-1',
  lcd: 'https://andromeda.api.kjnodes.com',
  gasAdjustment: 1.75,
  gasPrices: { uandr: 0.25 },
  prefix: 'andr',
  coinType: '118',
  baseAsset: 'uandr',
  name: 'Andromeda',
  version: '0.46',
  icon: process.env.CF_PAGES_URL + '/img/chains/Andromeda.png',
  channels: {
    // 'secret-1': 'channel-2',
    // 'kaiyo-1': 'channel-5',
    'phoenix-1': 'channel-12',
    'archway-1': 'channel-11',
  },
  explorer: {
    address: 'https://explorer.stavr.tech/Andromeda-Mainnet/account/{}',
    tx: 'https://explorer.stavr.tech/Andromeda-Mainnet/tx/{}',
    validator: 'https://explorer.stavr.tech/Andromeda-Mainnet/validators/{}',
    block: 'https://explorer.stavr.tech/Andromeda-Mainnet/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uandr',
      symbol: 'ANDR',
      name: 'Andr',
      icon: process.env.CF_PAGES_URL + '/img/coins/Andromeda.png',
      decimals: 6,
    },
  ],
}
