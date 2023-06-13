module.exports = {
  chainID: 'carbon-1',
  lcd: 'https://query-api.carbon.network/',
  gasAdjustment: 1.75,
  gasPrices: { swth: 1000 },
  prefix: 'swth',
  coinType: '118',
  baseAsset: 'swth',
  name: 'Carbon',
  icon: process.env.CF_PAGES_URL + '/img/chains/Carbon.svg',
  alliance: true,
  ibc: {
    fromTerra: 'channel-36',
    toTerra: 'channel-12',
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-16',
      fromTerra: 'channel-41',
    },
  },
  explorer: {
    address: 'https://scan.carbon.network/account/{}?net=main',
    tx: 'https://scan.carbon.network/transaction/{}?net=main',
    validator: 'https://scan.carbon.network/validator/{}?net=main',
    block: 'https://scan.carbon.network/block/{}?net=main',
  },
  tokens: [
    {
      token: 'swth',
      symbol: 'SWTH',
      name: 'Carbon',
      icon: process.env.CF_PAGES_URL + '/img/coins/Carbon.svg',
      decimals: 8,
    },
  ],
}
