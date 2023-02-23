module.exports = {
  chainID: 'cheqd-mainnet-1',
  lcd: 'rpc.cheqd.network',
  gasAdjustment: 1.75,
  gasPrices: { ncheq: 50ncheq },
  prefix: 'cheqd',
  coinType: '118',
  baseAsset: 'ncheq',
  name: 'cheqd',
  icon: 'https://cheqd.io/hubfs/Logos/cheqd-Icon-Colour.svg',
  ibc: {
    fromTerra: 'channel-89',
    toTerra: 'channel-9',
  }
}
