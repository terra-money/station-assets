module.exports = {
  chainID: 'mars-1',
  lcd: 'https://rest.marsprotocol.io',
  gasAdjustment: 1.75,
  gasPrices: { umars: 0 },
  prefix: 'mars',
  coinType: '330',
  baseAsset: 'umars',
  name: 'Mars',
  icon: 'https://station-assets.terra.money/img/chains/Mars.svg',
  // used by Station to decide which endpoint to use
  version: '0.46',
  ibc: {
    fromTerra: 'channel-78',
    toTerra: 'channel-2',
  },
  explorer: {
    address: "https://explorer.marsprotocol.io/accounts/{}",
    tx: "https://explorer.marsprotocol.io/transactions/{}",
    validator: "https://explorer.marsprotocol.io/validators/{}",
    block: "https://explorer.marsprotocol.io/blocks/{}",
  }
}
