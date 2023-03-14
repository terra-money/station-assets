module.exports = {
  chainID: 'osmosis-1',
  lcd: 'https://osmosis-1.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uosmo: 0.025 },
  prefix: 'osmo',
  coinType: '118',
  baseAsset: 'uosmo',
  name: 'Osmosis',
  icon: 'https://station-assets.terra.money/img/chains/Osmosis.svg',
  ibc: {
    toTerra: 'channel-251',
    fromTerra: 'channel-1',
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-341',
      fromTerra: 'channel-26',
    },
  },
  explorer: {
    address: "https://www.mintscan.io/osmosis/account/{}",
    tx: "https://www.mintscan.io/osmosis/txs/{}",
    validator: "https://www.mintscan.io/osmosis/validators/{}",
    block: "https://www.mintscan.io/osmosis/blocks/id/{}",
  }
}
