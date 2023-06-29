module.exports = {
  chainID: 'narwhal-1',
  lcd: 'https://migaloo-testnet-api.polkachu.com',
  gasAdjustment: 2,
  gasPrices: { uwhale: 0.015 },
  prefix: 'migaloo',
  coinType: '118',
  baseAsset: 'uwhale',
  name: 'Migaloo Testnet',
  icon: process.env.CF_PAGES_URL + '/img/chains/Migaloo.svg',
  explorer: {
    address: 'https://migaloo-testnet-api.polkachu.com/cosmos/auth/v1beta1/accounts/{}',
    tx: 'https://migaloo-testnet-api.polkachu.com/cosmos/tx/v1beta1/txs/{}',
    validator: 'https://migaloo-testnet-api.polkachu.com/cosmos/staking/v1beta1/validators/{}',
    block: 'https://migaloo-testnet-api.polkachu.com/cosmos/base/tendermint/v1beta1/blocks/{}',
  },
  tokens: [
    {
      token: 'uwhale',
      symbol: 'WHALE',
      name: 'Test Whale',
      icon: process.env.CF_PAGES_URL + '/img/coins/Whale.svg',
      decimals: 6,
    },
  ],
}
