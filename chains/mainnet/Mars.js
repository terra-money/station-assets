module.exports = {
  chainID: 'mars-1',
  lcd: 'https://rest.marsprotocol.io/',
  gasAdjustment: 1.75,
  gasPrices: { umars: 0 },
  prefix: 'mars',
  coinType: '330',
  baseAsset: 'umars',
  name: 'Mars Hub',
  icon: 'https://marsprotocol.io/mars_logo_colored.svg',
  ibc: {
    fromTerra: 'Will be created post launch, IBC disabled for ~3 days from genesis',
    toTerra: 'Will be created post launch, IBC disabled for ~3 days from genesis',
  }
}
