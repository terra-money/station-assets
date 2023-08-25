module.exports = {
    chainID: 'pion-1',
    lcd: 'https://rest-palvus.pion-1.ntrn.tech',
    gasAdjustment: 1.75,
    gasPrices: { untrn: 0.05 },
    prefix: 'neutron',
    coinType: '118',
    baseAsset: 'untrn',
    name: 'Neutron',
    icon: process.env.CF_PAGES_URL + '/img/chains/Neutron.png',
    disabledModules: ['staking'],
    channels: {},
    ibc: {
    },
    explorer: {
      address: 'https://testnet.mintscan.io/neutron-testnet/account/{}',
      tx: 'https://testnet.mintscan.io/neutron-testnet/tx/{}',
      validator: 'https://testnet.mintscan.io/neutron-testnet/validators/{}',
      block: 'https://testnet.mintscan.io/neutron-testnet/blocks/id/{}',
    },
    tokens: [
      {
        token: 'untrn',
        symbol: 'NTRN',
        name: 'Neutron',
        icon: process.env.CF_PAGES_URL + '/img/coins/Neutron.png',
        decimals: 6,
      },
      {
        token: 'uatom',
        symbol: 'ATOM',
        name: 'Cosmos',
        icon: process.env.CF_PAGES_URL + '/img/coins/Cosmos.svg',
        decimals: 6,
      },
      {
        token: 'uusdc',
        symbol: 'USDC',
        name: 'usdc',
        icon: process.env.CF_PAGES_URL + '/img/coins/axlUSDC.svg',
        decimals: 6,
      },
    ],
  }
  
