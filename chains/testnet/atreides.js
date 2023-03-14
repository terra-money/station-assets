module.exports = {
  chainID: 'atreides-1',
  lcd: 'https://atreides.terra.dev:1317',
  gasAdjustment: 2.5,
  gasPrices: { uatr: 0.0 },
  prefix: 'atreides',
  coinType: '118',
  baseAsset: 'uatr',
  name: 'Atreides',
  icon: 'https://station-assets.terra.money/img/chains/Atreides.png',
  ibc: {
    toTerra: 'channel-0',
    fromTerra: 'channel-226',
    ics: {
      contract:
        'atreides1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqmxgcku',
      toTerra: 'channel-1',
      fromTerra: 'channel-230',
    },
    icsFromTerra: {
      contract:
        'terra12havy0g3svy6jlnc0je3z4f0lujhkp8h79ux5myhy4ujufeczpzsr5w7lz',
      toTerra: 'channel-2',
      fromTerra: 'channel-233',
    },
  },
  explorer: {},
  tokens: [
    {
      token: 'uatr',
      symbol: 'ATR',
      name: 'Atreides',
      icon: 'https://station-assets.terra.money/img/coins/Atreides.png',
      decimals: 6,
    }
  ],    
}
