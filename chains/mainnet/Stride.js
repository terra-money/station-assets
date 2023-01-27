module.exports = {
  chainID: 'stride-1',
  lcd: 'https://stride-fleet.main.stridenet.co/api',
  gasAdjustment: 1.75,
  gasPrices: { ustrd: 0 },
  prefix: 'stride',
  coinType: '118',
  baseAsset: 'ustrd',
  name: 'Stride',
  icon: 'https://station-assets.terra.money/img/chains/Stride.png',
  ibc: {
    fromTerra: 'channel-46',
    toTerra: 'channel-52',
  }
}
