module.exports = {
  chainID: 'akashnet-2',
  lcd: 'https://rest.cosmos.directory/akash',
  gasAdjustment: 1.75,
  gasPrices: { uakt: 0.025uakt },
  prefix: 'akash',
  coinType: '118',
  baseAsset: 'uakt',
  name: 'Akash Network',
  icon: 'https://github.com/akash-network/brand-assets',
  ibc: {
    fromTerra: 'channel-45',
    toTerra: 'channel-56',
  }
}
