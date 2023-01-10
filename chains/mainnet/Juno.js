module.exports = {
  chainID: 'juno-1',
  lcd: 'lcd-juno.mib.tech',
  gasAdjustment: 1.75,
  gasPrices: { ujuno: 0.0025 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujuno',
  name: 'Juno',
  icon: 'https://github.com/CosmosContracts/junoswap-asset-list/blob/main/images/juno.png',
  ibc: {
    fromTerra: 'channel-2',
    toTerra: 'channel-86',
  }
}
