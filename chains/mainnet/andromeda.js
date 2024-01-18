module.exports = {
    chainID: 'andromeda-1',
    lcd: 'https://andromeda.api.kjnodes.com',
    gasAdjustment: 1.5,
    gasPrices: { uandr: 0.25 },
    prefix: 'andr',
    coinType: '118',
    baseAsset: 'uandr',
    name: 'Andromeda',
    icon: process.env.CF_PAGES_URL + '/img/chains/Andromeda.png',
    channels: {
        // 'secret-1': 'channel-2',
        'phoenix-1': 'channel-4',
        'kaiyo-1': 'channel-5',
    },
    explorer: {
        address: 'https://explorer.stavr.tech/Andromeda-Mainnet/account/{}',
        tx: 'https://explorer.stavr.tech/Andromeda-Mainnet/tx/{}',
        validator: 'https://explorer.stavr.tech/Andromeda-Mainnet/validators/{}',
        block: 'https://explorer.stavr.tech/Andromeda-Mainnet/blocks/id/{}',
      },
    tokens: [
      {
        token: 'uandr',
        symbol: 'ANDR',
        name: 'Andr',
        icon: process.env.CF_PAGES_URL + '/img/coins/Andromeda.png',
        decimals: 6,
      },
    ],
  }