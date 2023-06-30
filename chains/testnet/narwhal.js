module.exports = {
  chainID: 'narwhal-1',
  lcd: 'https://migaloo-testnet-api.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { uwhale: 0.015 },
  prefix: 'migaloo',
  coinType: '118',
  baseAsset: 'uwhale',
  name: 'Migaloo Testnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/Migaloo.svg',
  explorer: {
    address: 'https://testnet.migaloo.explorers.guru/account/{}',
    tx: 'https://testnet.migaloo.explorers.guru/transaction/{}',
    validator: 'https://testnet.migaloo.explorers.guru/validator/{}',
    block: 'https://testnet.migaloo.explorers.guru/block/{}',
  },
  tokens: [
    {
      token: 'uwhale',
      symbol: 'WHALE',
      name: 'Test Whale',
      icon: process.env.CF_PAGES_URL + '/img/coins/Whale.svg',
      decimals: 6,
    },
    {
      token: 'ibc/623CD0B9778AD974713317EA0438A0CCAA72AF0BBE7BEE002205BCA25F1CA3BA',
      symbol: 'Test IBC TOKEN',
      name: 'Test IBC TOKEN',
      icon: process.env.CF_PAGES_URL + '/img/chains/AllianceTestnet.png',
      decimals: 6,
    },
  ],
}
