module.exports = {
  chainID: 'osmosis-1',
  lcd: 'https://lcd-osmosis.keplr.app',
  gasAdjustment: 1.75,
  gasPrices: { uosmo: 0.025 },
  prefix: 'osmo',
  coinType: '118',
  baseAsset: 'uosmo',
  name: 'Osmosis',
  icon: 'https://assets.terra.money/icon/svg/ibc/OSMO.svg',
  ibc: {
    toTerra: 'channel-251',
    fromTerra: 'channel-1',
  },
}
