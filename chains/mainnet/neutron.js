module.exports = {
    chainID: 'neutron-1',
    lcd: 'https://rest-kralum.neutron-1.neutron.org',
    gasAdjustment: 1.75,
    gasPrices: { untrn: 0.01 },
    prefix: 'neutron',
    coinType: '118',
    baseAsset: 'untrn',
    name: 'Neutron',
    icon: process.env.CF_PAGES_URL + '/img/chains/Neutron.png',
    disabledModules: ['staking'],
    channels: {
      'osmosis-1': 'channel-10',
      'stride-1': 'channel-8',
      'axelar-dojo-1': 'channel-2',
      'cosmoshub-4': 'channel-1',
      'mars-1': 'channel-16',
      'kaiyo-1': 'channel-3',
    },
    icsChannels: {
    },
    explorer: {
      address: 'https://www.mintscan.io/neutron/account/{}',
      tx: 'https://www.mintscan.io/neutron/tx/{}',
      validator: 'https://www.mintscan.io/neutron/validators/{}',
      block: 'https://www.mintscan.io/neutron/blocks/id/{}',
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
  
