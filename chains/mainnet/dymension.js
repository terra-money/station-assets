module.exports = {
  chainID: 'dymension_1100-1',
  lcd: 'https://api.dymension.nodestake.org',
  gasAdjustment: 1.75,
  gasPrices: {
    adym: 20000000000,
  },
  prefix: 'dym',
  coinType: '60',
  baseAsset: 'adym',
  name: 'Dymension Hub',
  version: "0.46",
  icon: process.env.CF_PAGES_URL + '/img/chains/dymension.svg',
  channels: {
    'cosmoshub-4': 'channel-1',
    'osmosis-1': 'channel-2',
  },
  icsChannels: {},
  explorer: {
    address: 'https://explorer.nodestake.org/dymension/account/{}',
    tx: 'https://explorer.nodestake.org/dymension/tx/{}',
    validator: 'https://explorer.nodestake.org/dymension/validators/{}',
    block: 'https://explorer.nodestake.org/dymension/blocks/id/{}',
  },
  tokens: [
    {
      token: "adym",
      name: "Dymension",
      symbol: "DYM",
      decimals: 18,
      icon: process.env.CF_PAGES_URL + "/img/coins/dymension.svg"
    }
  ],
}
