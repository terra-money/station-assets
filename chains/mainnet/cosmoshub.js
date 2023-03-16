module.exports = {
  chainID: 'cosmoshub-4',
  lcd: 'https://cosmoshub-4.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uatom: 0.025 },
  prefix: 'cosmos',
  coinType: '118',
  baseAsset: 'uatom',
  name: 'Cosmos Hub',
  icon: 'https://station-assets.terra.money/img/chains/Cosmos.svg',
  ibc: {
    toTerra: 'channel-339',
    fromTerra: 'channel-0',
  },
  explorer: {
    address: "https://www.mintscan.io/cosmos/account/{}",
    tx: "https://www.mintscan.io/cosmos/txs/{}",
    validator: "https://www.mintscan.io/cosmos/validators/{}",
    block: "https://www.mintscan.io/cosmos/blocks/id/{}",
  }
}
