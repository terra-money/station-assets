module.exports = {
  chainID: 'harkonnen-1',
  lcd: 'https://harkonnen-lcd.candeago.dev',
  gasAdjustment: 2.5,
  gasPrices: { uhar: 0.0 },
  prefix: 'harkonnen',
  coinType: '118',
  baseAsset: 'uhar',
  name: 'Harkonnen',
  icon: 'https://station-assets.terra.money/img/chains/Harkonnen.png',
  ibc: {
    toTerra: 'channel-2',
    fromTerra: 'channel-187',
    ics: {
      contract:
        'harkonnen1j08452mqwadp8xu25kn9rleyl2gufgfjnv0sn8dvynynakkjukcqzycjej',
      toTerra: 'channel-3',
      fromTerra: 'channel-188',
    },
  },
}
