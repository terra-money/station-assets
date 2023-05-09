module.exports = {
  chainID: 'uni-6',
  lcd: 'https://juno-testnet-api.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { ujunox: 0.015 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujunox',
  name: 'Juno',
  icon: 'https://station-assets.terra.money/img/chains/Juno.svg',
  explorer: {
    address: "https://testnet.juno.explorers.guru/account/{}",
    tx: "https://testnet.juno.explorers.guru/transaction/{}",
    validator: "https://testnet.juno.explorers.guru/validator/{}",
    block: "https://testnet.juno.explorers.guru/block/{}",
  },
  tokens: [
    {
      token: 'ujunox',
      symbol: 'JUNO',
      name: 'Juno',
      icon: 'https://station-assets.terra.money/img/coins/Juno.svg',
      decimals: 6,
    }
  ],
}
