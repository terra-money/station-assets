module.exports = {
  chainID: 'migaloo-1',
  lcd: 'https://whitewhale-api.polkachu.com',
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
  }
}
