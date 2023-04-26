module.exports = {
  chainID: 'migaloo-1',
  lcd: 'https://ww-migaloo-rest.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: { uwhale: 0.25 },
  prefix: 'migaloo',
  coinType: '118',
  baseAsset: 'uwhale',
  name: 'Migaloo',
  icon: 'https://station-assets.terra.money/img/chains/Migaloo.svg',
  alliance: true,
  ibc: {
    fromTerra: 'channel-86',
    toTerra: 'channel-0',
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-2',
      fromTerra: 'channel-87',
    },
  },
  explorer: {
    address: 'https://ping.pub/migaloo/account/{}',
    tx: 'https://ping.pub/migaloo/txs/{}',
    validator: 'https://ping.pub/migaloo/validators/{}',
    block: 'https://ping.pub/migaloo/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uwhale',
      symbol: 'WHALE',
      name: 'Migaloo',
      icon: 'https://station-assets.terra.money/img/coins/Whale.svg',
      decimals: 6,
    },
    {
      token:
        'factory/migaloo1436kxs0w2es6xlqpp9rd35e3d0cjnw4sv8j3a7483sgks29jqwgshqdky4/ampWHALE',
      symbol: 'ampWHALE',
      name: 'ERIS Amplified WHALE',
      icon: 'https://station-assets.terra.money/img/coins/ampWHALE.svg',
      decimals: 6,
    },
    {
      token:
        'factory/migaloo1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqdhts4u/boneWhale',
      symbol: 'bWHALE',
      name: 'boneWHALE',
      icon: 'https://station-assets.terra.money/img/coins/bWHALE.png',
      decimals: 6,
    },
  ],
}
