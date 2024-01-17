module.exports = {
    chainID: 'theta-testnet-001',
    lcd: 'https://rest.sentry-01.theta-testnet.polypore.xyz',
    gasAdjustment: 1.5,
    gasPrices: { uatom: 0.025 },
    prefix: 'cosmos',
    coinType: '118',
    baseAsset: 'uatom',
    name: 'Cosmos',
    icon: process.env.CF_PAGES_URL + '/img/chains/Cosmos.svg',
    channels: {
    },
    explorer: {
      address: 'https://testnet.mintscan.io/cosmoshub-testnet/account/{}',
      tx: 'https://testnet.mintscan.io/cosmoshub-testnet/txs/{}',
      validator: 'https://testnet.mintscan.io/cosmoshub-testnet/validators/{}',
      block: 'https://testnet.mintscan.io/cosmoshub-testnet/blocks/id/{}',
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
  