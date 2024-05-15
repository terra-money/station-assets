module.exports = {
  chainID: 'pryzm-1',
  lcd: 'https://api.pryzm.zone',
  gasAdjustment: 1.6,
  gasPrices: { upryzm: 0.01 },
  prefix: 'pryzm',
  coinType: '118',
  baseAsset: 'upryzm',
  name: 'Pryzm',
  icon: process.env.CF_PAGES_URL + '/img/chains/Pryzm.svg',
  alliance: true,
  explorer: {
    address: 'https://chainsco.pe/pryzm/address/{}',
    tx: 'https://chainsco.pe/pryzm/tx/{}',
    validator: 'https://chainsco.pe/pryzm/validator/{}',
    block: 'https://chainsco.pe/pryzm/block/{}',
  },
  channels: {
  },
  tokens: [
    {
      token: 'upryzm',
      symbol: 'PRYZM',
      name: 'Pryzm',
      icon: process.env.CF_PAGES_URL + '/img/coins/Pryzm.svg',
      decimals: 6,
    },
    {
      token: 'factory/pryzm1jnhcsa5ddjsjq2t97v6a82z542rduxvtw6wd9h/uauuu',
      symbol: 'AUUU',
      name: 'AUUU',
      icon: process.env.CF_PAGES_URL + '/img/coins/AUUU.png',
      decimals: 6,
    },
  ],
}
