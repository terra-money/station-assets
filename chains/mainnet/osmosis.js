module.exports = {
  chainID: 'osmosis-1',
  lcd: 'https://lcd.osmosis.zone',
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
}
