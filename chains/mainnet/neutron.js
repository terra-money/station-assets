module.exports = {
    chainID: 'neutron-1',
    lcd: 'https://rest-kralum.neutron-1.neutron.org',
    gasAdjustment: 1.75,
    gasPrices: { untrn: 0.01 },
    prefix: 'neutron',
    coinType: '118',
    baseAsset: 'untrn',
    name: 'Neutron',
    stakingDisabled: true,
    icon: process.env.CF_PAGES_URL + '/img/chains/Neutron.svg',
    ibc: {
      fromTerra: 'channel-167',
      toTerra: 'channel-5',
    },
    explorer: {
      address: 'https://www.mintscan.io/neutron/account/{}',
      tx: 'https://www.mintscan.io/comdex/neutron/{}',
      validator: 'https://www.mintscan.io/neutron/validators/{}',
      block: 'https://www.mintscan.io/neutron/blocks/id/{}',
    },
    tokens: [
      {
        token: 'untrn',
        symbol: 'NTRN',
        name: 'Neutron',
        icon: process.env.CF_PAGES_URL + '/img/coins/Neutron.svg',
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
    ]
  }
  