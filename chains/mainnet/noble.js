module.exports = {
  chainID: 'noble-1',
  lcd: 'https://noble-api.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: { uusdc: 0 }, 
  prefix: 'noble',
  coinType: '118',
  baseAsset: 'ustake',
  name: 'Noble',
  icon: 'https://station-assets.terra.money/img/chains/Noble.png',
  ibc: {
    toTerra: 'channel-', // <-- update this
    fromTerra: 'channel-', // <-- update this
  },
  explorer: {
    address: 'https://www.mintscan.io/noble/account/{}',
    tx: 'https://www.mintscan.io/noble/txs/{}',
    validator: 'https://www.mintscan.io/noble/validators/{}',
    block: 'https://www.mintscan.io/noble/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ustake',
      symbol: 'STAKE',
      name: 'Stake',
      icon: `https://station-assets.terra.money/img/coins/Noble.png`,
      decimals: 6,
    },
    {
      token: 'ufrienzies',
      symbol: 'FRNZ',
      name: 'frienzies',
      icon: `https://station-assets.terra.money/img/coins/Frnz.svg`,
      decimals: 6,
    },
    {
      token: 'uusdc',
      symbol: 'USDC',
      name: 'usdc',
      icon: `https://station-assets.terra.money/img/coins/axlUSDC.svg`,
      decimals: 6,
    },
  ],
};
