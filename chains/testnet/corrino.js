module.exports = {
  chainID: 'corrino-1',
  lcd: 'https://corrino-lcd.feather.network/',
  gasAdjustment: 2.5,
  gasPrices: { uhar: 0.0 },
  prefix: 'corrino',
  coinType: '118',
  baseAsset: 'ucor',
  name: 'Corrino',
  icon: 'https://station-assets.terra.money/img/chains/Corrino.png',
  ibc: {
    toTerra: 'channel-1',
    fromTerra: 'channel-197',
    ics: {
      contract:
        'corrino1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqmxgcku',
      toTerra: 'channel-0',
      fromTerra: 'channel-196',
    },
    icsFromTerra: {
      contract:
        'terra12havy0g3svy6jlnc0je3z4f0lujhkp8h79ux5myhy4ujufeczpzsr5w7lz',
      toTerra: 'channel-4',
      fromTerra: 'channel-202',
    },
  },
}
