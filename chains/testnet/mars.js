module.exports = {
  chainID: 'ares-1',
  lcd: 'https://testnet-rest.marsprotocol.io',
  gasAdjustment: 2,
  gasPrices: { umars: 0.0 },
  prefix: 'mars',
  coinType: '330',
  baseAsset: 'umars',
  name: 'Mars',
  icon: 'https://station-assets.terra.money/img/chains/Mars.svg',
  ibc: {
    toTerra: 'channel-0',
    fromTerra: 'channel-189',
  },
}
