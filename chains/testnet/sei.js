module.exports = {
  chainID: 'atlantic-1',
  lcd: 'https://sei-testnet-rpc.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { usei: 0.01 },
  prefix: 'sei',
  coinType: '118',
  baseAsset: 'usei',
  name: 'Sei',
  icon: 'https://station-assets.terra.money/img/chains/Sei.png',
  ibc: {
    fromTerra: 'channel-100',
    toTerra: 'channel-11',
  },
  explorer: {},
  tokens: [
    {
      token: 'usei',
      symbol: 'SEI',
      name: 'Sei',
      icon: 'https://station-assets.terra.money/img/coins/Sei.png',
      decimals: 6,
    },
  ],
}
