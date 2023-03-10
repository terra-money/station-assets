module.exports = {
  chainID: 'migaloo-1',
  lcd: 'https://ww-migaloo-rest.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: { uwhale: 0 },
  prefix: 'migaloo',
  coinType: '118',
  baseAsset: 'uwhale',
  name: 'Migaloo',
  icon: 'https://station-assets.terra.money/img/chains/Migaloo.svg',
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
    address: "https://ping.pub/migaloo/account/{}",
    tx: "https://ping.pub/migaloo/txs/{}",
    validator: "https://ping.pub/migaloo/validators/{}",
    block: "https://ping.pub/migaloo/blocks/id/{}",
  }
}
