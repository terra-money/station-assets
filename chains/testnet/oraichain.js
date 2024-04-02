module.exports = {
    chainID: 'Oraichain-testnet',
    lcd: 'https://testnet-lcd.orai.io',
    gasAdjustment: 1.5,
    gasPrices: { orai: 0.005 },
    prefix: 'orai',
    coinType: '118',
    baseAsset: 'orai',
    name: 'Oraichain',
    icon: process.env.CF_PAGES_URL + '/img/chains/orai.svg',
    channels: {
    },
    ics20Channels: {},
    explorer: {
      address: 'https://testnet.scan.orai.io/account/{}',
      tx: 'https://testnet.scan.orai.io/txs/{}',
      validator: 'https://testnet.scan.orai.io/validators/{}',
      block: 'https://testnet.scan.orai.io/blocks/{}',
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
