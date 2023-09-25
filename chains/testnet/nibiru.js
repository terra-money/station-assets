module.exports = {
  chainID: 'nibiru-itn-2',
  lcd: 'https://lcd.itn-2.nibiru.fi',
  gasAdjustment: 2,
  gasPrices: { unibi: 0.015 },
  prefix: 'nibi',
  coinType: '118',
  baseAsset: 'unibi',
  name: 'Nibiru',
  icon: 'https://nibiru.fi/assets/nibi-logo-smooth.727efedc.svg',
  alliance: false,
  explorer: {
    address: 'https://nibiru.fi/testnet/address/{}',
    tx: 'https://nibiru.fi/testnet/tx/{}',
    validator: 'https://nibiru.fi/testnet/validator/{}',
    block: 'https://nibiru.fi/testnet/block/{}',
  },
  channels: {},
  tokens: [
    {
      token: 'unibi',
      symbol: 'NIBI',
      name: 'Nibiru',
      icon: 'https://nibiru.fi/assets/nibi-logo-smooth.727efedc.svg',
      decimals: 6,
    },
  ],
}
