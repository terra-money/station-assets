module.exports = {
  chainID: 'harkonnen-1',
  lcd: 'https://harkonnen.terra.dev:1317',
  gasAdjustment: 2.5,
  gasPrices: { uhar: 0.0 },
  prefix: 'harkonnen',
  coinType: '118',
  baseAsset: 'uhar',
  name: 'Harkonnen',
  icon: 'https://station-assets.terra.money/img/chains/Harkonnen.png',
  ibc: {
    toTerra: 'channel-0',
    fromTerra: 'channel-228',
    ics: {
      contract:
        'harkonnen1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqswjsmm',
      toTerra: 'channel-1',
      fromTerra: 'channel-232',
    },
    icsFromTerra: {
      contract:
        'terra12havy0g3svy6jlnc0je3z4f0lujhkp8h79ux5myhy4ujufeczpzsr5w7lz',
      toTerra: 'channel-2',
      fromTerra: 'channel-236',
    },
  },
  explorer: {},
  tokens: [
    {
      token: 'uhar',
      symbol: 'HAR',
      name: 'Harkonnen',
      icon: 'https://station-assets.terra.money/img/coins/Harkonnen.png',
      decimals: 6,
    }
  ],
}
