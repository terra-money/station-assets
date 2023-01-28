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
    fromTerra: 'channel-20',
    toTerra: 'channel-27',
  },
  isClassic: true,
}
