module.exports = {
  chainID: 'ares-1',
  lcd: 'https://testnet-rest.marsprotocol.io',
  gasAdjustment: 1.75,
  gasPrices: { umars: 0.0 },
  prefix: 'mars',
  coinType: '118',
  baseAsset: 'umars',
  name: 'Mars',
  icon: 'https://station-assets.terra.money/img/chains/Mars.svg',
  ibc: {
    toTerra: 'channel-1',
    fromTerra: 'channel-66',
  },
}
