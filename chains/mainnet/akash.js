module.exports = {
  chainID: 'akashnet-2',
  lcd: 'https://rest.cosmos.directory/akash',
  gasAdjustment: 1.75,
  gasPrices: { uakt: 0.025 },
  prefix: 'akash',
  coinType: '118',
  baseAsset: 'uakt',
  name: 'Akash',
  icon: 'https://station-assets.terra.money/img/chains/Akash.svg',
  ibc: {
    fromTerra: 'channel-45',
    toTerra: 'channel-56',
  },
  explorer: {
    address: "https://www.mintscan.io/akash/account/{}",
    tx: "https://www.mintscan.io/akash/txs/{}",
    validator: "https://www.mintscan.io/akash/validators/{}",
    block: "https://www.mintscan.io/akash/blocks/id/{}",
  }
}
