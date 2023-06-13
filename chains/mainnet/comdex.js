module.exports = {
  chainID: 'comdex-1',
  lcd: 'https://rest.comdex.one',
  gasAdjustment: 1.75,
  gasPrices: { ucmdx: 0.0025 },
  prefix: 'comdex',
  coinType: '118',
  baseAsset: 'ucmdx',
  name: 'Comdex',
  icon: process.env.CF_PAGES_URL + '/img/chains/Comdex.svg',
  ibc: {
    fromTerra: 'channel-39',
    toTerra: 'channel-51',
  },
  explorer: {
    address: 'https://www.mintscan.io/comdex/account/{}',
    tx: 'https://www.mintscan.io/comdex/txs/{}',
    validator: 'https://www.mintscan.io/comdex/validators/{}',
    block: 'https://www.mintscan.io/comdex/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ucmdx',
      symbol: 'CMDX',
      name: 'Comdex',
      icon: process.env.CF_PAGES_URL + '/img/coins/Comdex.svg',
      decimals: 6,
    },
    {
      token: 'ucmst',
      symbol: 'CMST',
      name: 'Composite',
      icon: process.env.CF_PAGES_URL + '/img/coins/CMST.svg',
      decimals: 6,
    },
    {
      token: 'uharbor',
      symbol: 'HARBOR',
      name: 'Harbor',
      icon: process.env.CF_PAGES_URL + '/img/coins/Harbor.svg',
      decimals: 6,
    },
  ],
}
