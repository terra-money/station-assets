module.exports = {
  chainID: 'corrino-1',
  lcd: 'https://corrino.terra.dev:1317',
  gasAdjustment: 2.5,
  gasPrices: { ucor: 0.0 },
  prefix: 'corrino',
  coinType: '118',
  baseAsset: 'ucor',
  name: 'Corrino',
  icon: 'https://station-assets.terra.money/img/chains/Corrino.png',
  ibc: {
    toTerra: 'channel-0',
    fromTerra: 'channel-225',
    ics: {
      contract:
        'corrino1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqmxgcku',
      toTerra: 'channel-1',
      fromTerra: 'channel-231',
    },
    icsFromTerra: {
      contract:
        'terra12havy0g3svy6jlnc0je3z4f0lujhkp8h79ux5myhy4ujufeczpzsr5w7lz',
      toTerra: 'channel-2',
      fromTerra: 'channel-235',
    },
  },
  explorer: {},
  tokens: [
    {
      token: 'ucor',
      symbol: 'COR',
      name: 'Corrino',
      icon: 'https://station-assets.terra.money/img/coins/Corrino.png',
      decimals: 6,
    },
  ],
}
