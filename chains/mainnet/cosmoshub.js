module.exports = {
  chainID: 'cosmoshub-4',
  lcd: 'https://cosmoshub-4.terra.dev:1317',
  gasAdjustment: 1.75,
  gasPrices: { uatom: 0.025 },
  prefix: 'cosmos',
  coinType: '118',
  baseAsset: 'uatom',
  name: 'Cosmos',
  icon: 'https://station-assets.terra.money/img/chains/Cosmos.svg',
  ibc: {
    toTerra: 'channel-339',
    fromTerra: 'channel-0',
  },
  explorer: {
    address: 'https://www.mintscan.io/cosmos/account/{}',
    tx: 'https://www.mintscan.io/cosmos/txs/{}',
    validator: 'https://www.mintscan.io/cosmos/validators/{}',
    block: 'https://www.mintscan.io/cosmos/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uatom',
      symbol: 'ATOM',
      name: 'Cosmos',
      icon: 'https://station-assets.terra.money/img/coins/Cosmos.svg',
      decimals: 6,
    },
  ],
}
