module.exports = {
  chainID: 'crescent-1',
  lcd: 'https://mainnet.crescent.network:1317',
  gasAdjustment: 1.75,
  gasPrices: { ucre: 0.01 },
  prefix: 'cre',
  coinType: '118',
  baseAsset: 'ucre',
  name: 'Crescent',
  icon: 'https://station-assets.terra.money/img/chains/Crescent.svg',
  ibc: {
    fromTerra: 'channel-37',
    toTerra: 'channel-27',
  }
}
