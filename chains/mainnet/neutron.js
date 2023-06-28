module.exports = {
    chainID: 'neutron-1',
    lcd: 'https://lcd-neutron.whispernode.com',
    gasAdjustment: 1.75,
    gasPrices: { untrn: 0.01 },
    prefix: 'neutron',
    coinType: '118',
    baseAsset: 'untrn',
    name: 'Neutron',
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
    ],
  }
  