module.exports = {
  chainID: 'axelar-dojo-1',
  lcd: 'https://lcd-axelar.imperator.co',
  gasAdjustment: 1.75,
  gasPrices: { uaxl: 0.007 },
  prefix: 'axelar',
  coinType: '118',
  baseAsset: 'uaxl',
  name: 'Axelar',
  icon: 'https://station-assets.terra.money/img/chains/Axelar.svg',
  ibc: {
    fromTerra: 'channel-19',
    toTerra: 'channel-0',
  },
  isClassic: true,
}
