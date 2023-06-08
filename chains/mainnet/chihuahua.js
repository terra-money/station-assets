module.exports = {
  chainID: 'chihuahua-1',
  lcd: 'https://api.chihuahua.wtf',
  gasAdjustment: 2,
  gasPrices: { uhuahua: 1 },
  prefix: 'chihuahua',
  coinType: '118',
  baseAsset: 'uhuahua',
  name: 'Chihuahua',
  icon: process.env.CF_PAGES_URL + '/img/chains/Huahua.png',
  ibc: {
    fromTerra: 'channel-44',
    toTerra: 'channel-34',
  },
  explorer: {
    address: 'https://www.mintscan.io/chihuahua/account/{}',
    tx: 'https://www.mintscan.io/chihuahua/txs/{}',
    validator: 'https://www.mintscan.io/chihuahua/validators/{}',
    block: 'https://www.mintscan.io/chihuahua/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uhuahua',
      symbol: 'HUAHUA',
      name: 'Huahua',
      icon: process.env.CF_PAGES_URL + '/img/coins/Huahua.png',
      decimals: 6,
    },
    {
      token:
        'chihuahua1jz5n4aynhpxx7clf2m8hrv9dp5nz83k67fgaxhy4p9dfwl6zssrq3ymr6w',
      symbol: 'bHUAHUA',
      name: 'boneHUAHUA',
      icon: process.env.CF_PAGES_URL + '/img/coins/bHUAHUA.png',
      decimals: 6,
    },
  ],
}
