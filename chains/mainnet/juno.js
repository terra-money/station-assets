module.exports = {
  chainID: 'juno-1',
  lcd: 'https://lcd-juno.mib.tech',
  gasAdjustment: 1.75,
  gasPrices: { ujuno: 0.0025 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujuno',
  name: 'Juno',
  icon: 'https://station-assets.terra.money/img/chains/Juno.svg',
  ibc: {
    fromTerra: 'channel-2',
    toTerra: 'channel-86',
    ics: {
      contract:
        'juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
      toTerra: 'channel-154',
      fromTerra: 'channel-33',
    },
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-153',
      fromTerra: 'channel-32',
    },
  },
  explorer: {
    address: "https://www.mintscan.io/juno/account/{}",
    tx: "https://www.mintscan.io/juno/txs/{}",
    validator: "https://www.mintscan.io/juno/validators/{}",
    block: "https://www.mintscan.io/juno/blocks/id/{}",
  }
}
