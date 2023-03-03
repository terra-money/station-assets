module.exports = {
  chainID: 'cheqd-mainnet-1',
  lcd: 'https://api.cheqd.net',
  gasAdjustment: 1.75,
  gasPrices: { ncheq: 50 },
  prefix: 'cheqd',
  coinType: '118',
  baseAsset: 'ncheq',
  name: 'cheqd',
  icon: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/cheqd/images/cheq.svg',
  ibc: {
    fromTerra: 'channel-89',
    toTerra: 'channel-9',
  }
}
