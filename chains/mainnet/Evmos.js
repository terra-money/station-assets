module.exports = {
  chainID: 'evmos_9001-2',
  lcd: 'https://rest.bd.evmos.org:1317',
  gasAdjustment: 1.75,
  gasPrices: { aevmos: 25000000000 },
  prefix: 'evmos',
  coinType: '118',
  baseAsset: 'aevmos',
  name: 'Evmos',
  icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/evmos/images/evmos.svg',
  ibc: {
    fromTerra: 'channel-51',
    toTerra: 'channel-6',
  },
}
