module.exports = {
  chainID: 'atlantic-1',
  lcd: 'https://sei-chain-incentivized.com/sei-chain-app',
  gasAdjustment: 2,
  gasPrices: { usei: 0.01 },
  prefix: 'sei',
  coinType: '118',
  baseAsset: 'usei',
  name: 'Sei',
  icon: 'https://station-assets.terra.money/img/chains/Sei.png',
  ibc: {
    fromTerra: 'channel-100',
    toTerra: 'channel-11',
  },
}
