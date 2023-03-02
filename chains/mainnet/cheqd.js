module.exports = {
  chainID: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.network',
  gasAdjustment: 1.75,
  gasPrices: { ncheq: 50 },
  prefix: 'cheqd',
  coinType: '118',
  baseAsset: 'ncheq',
  name: 'cheqd',
  icon: 'https://station-assets.terra.money/img/chains/Cheqd.svg',
  ibc: {
    fromTerra: 'channel-89',
    toTerra: 'channel-9',
  }
}
