module.exports = {
    chainID: 'Oraichain',
    lcd: 'https://lcd-oraichain.tfl.foundation',
    gasAdjustment: 1.5,
    gasPrices: { orai: 0.005 },
    prefix: 'orai',
    coinType: '118',
    baseAsset: 'orai',
    name: 'Oraichain',
    icon: process.env.CF_PAGES_URL + '/img/chains/orai.svg',
    channels: {
        'cosmoshub-4': 'channel-15',
        'injective-1': 'channel-146',
        'osmosis-1': 'channel-13',
    },
    ics20Channels: {},
    explorer: {
      address: 'https://scan.orai.io/account/{}',
      tx: 'https://scan.orai.io/txs/{}',
      validator: 'https://scan.orai.io/validators/{}',
      block: 'https://scan.orai.io/blocks/{}',
    },
    tokens: [
        {
            token: 'orai',
            symbol: 'ORAI',
            name: 'Oraichain',
            icon: process.env.CF_PAGES_URL + '/img/coins/orai.svg',
            decimals: 6,
          },
    ],
  }