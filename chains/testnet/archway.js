module.exports = {
  chainID: 'constantine-3',
  lcd: 'https://api.constantine.archway.tech/',
  gasAdjustment: 1.75,
  gasPrices: { aconst: 196000000000 },
  prefix: 'archway',
  coinType: '118',
  baseAsset: 'aconst',
  name: 'Archway (Testnet)',
  icon: process.env.CF_PAGES_URL + '/img/chains/Archway.png',
  channels: {},
  explorer: {
    address: 'https://testnet.archway.explorers.guru/account/{}',
    tx: 'https://testnet.archway.explorers.guru/transaction/{}',
    validator: 'https://testnet.archway.explorers.guru/validator/{}',
    block: 'https://testnet.archway.explorers.guru/block/{}',
  },
  tokens: [
    {
      token: 'aconst',
      symbol: 'CONST',
      name: 'CONSTANTINE',
      icon: process.env.CF_PAGES_URL + '/img/coins/Aarch.png',
      decimals: 18,
    },
  ],
}
