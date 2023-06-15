module.exports = {
  chainID: 'cosmoshub-4',
  lcd: 'https://cosmoshub-4.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uatom: 0.025 },
  prefix: 'cosmos',
  coinType: '118',
  baseAsset: 'uatom',
  name: 'Cosmos',
  icon: process.env.CF_PAGES_URL + '/img/chains/Cosmos.svg',
  ibc: {
    fromTerra: 'channel-0',
    toTerra: 'channel-339',
  },
  channels: {
    'phoenix-1': 'channel-339',
    'axelar-dojo-1': 'channel-293',
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
      icon: process.env.CF_PAGES_URL + '/img/coins/Cosmos.svg',
      decimals: 6,
    },
  ],
}
