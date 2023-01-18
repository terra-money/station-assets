module.exports = {
  chainID: "corrino-1",
  lcd: "https://corrino-lcd.feather.network/",
  gasAdjustment: 2.5,
  gasPrices: { uhar: 0.0 },
  prefix: "corrino",
  coinType: "118",
  baseAsset: "ucor",
  name: "Corrino",
  icon: "https://station-assets.terra.money/img/chains/Corrino.png",
  ibc: {
    toTerra: "channel-3",
    fromTerra: "channel-204",
    ics: {
      contract:
        "corrino1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqmxgcku",
      toTerra: "channel-2",
      fromTerra: "channel-203",
    },
  },
};
