module.exports = {
    chainID: 'pacific-1',
    lcd: 'https://sei-api.polkachu.com/',
    gasAdjustment: 2,
    gasPrices: { usei: 0.1 },
    prefix: 'sei',
    coinType: '118',
    baseAsset: 'usei',
    name: 'Sei',
    icon: process.env.CF_PAGES_URL + '/img/chains/sei.svg',
    ibc: {},
    channels: {},
    explorer: {
      address: 'https://sei.explorers.guru/account/{}',
      tx: 'https://sei.explorers.guru/transaction/{}',
      validator: 'https://sei.explorers.guru/validator/{}',
      block: 'https://sei.explorers.guru/block/{}',
    },
    tokens: [
      {
        token: 'usei',
        symbol: 'SEI',
        name: 'Sei',
        icon: process.env.CF_PAGES_URL + '/img/coins/sei.svg',
        decimals: 6,
      },
    ],
  }
  