module.exports = {
    chainID: 'terra',
    lcd: 'http://a15f3be10859e4a70b8a1f156a4e8cd5-624465546.us-east-1.elb.amazonaws.com:1317',
    gasAdjustment: 3,
    gasPrices: { uluna: 0.15 },
    prefix: 'terra',
    coinType: '330',
    baseAsset: 'uluna',
    name: 'Account Abstraction Testnet',
    icon: process.env.CF_PAGES_URL + '/img/chains/Terra.svg',
    alliance: true,
    explorer: {
      address: 'http://a15f3be10859e4a70b8a1f156a4e8cd5-624465546.us-east-1.elb.amazonaws.com:1317/cosmos/auth/v1beta1/account_info/{}',
      tx: 'http://a15f3be10859e4a70b8a1f156a4e8cd5-624465546.us-east-1.elb.amazonaws.com:1317/cosmos/tx/v1beta1/txs/{}',
      validator: 'http://a15f3be10859e4a70b8a1f156a4e8cd5-624465546.us-east-1.elb.amazonaws.com:1317/cosmos/distribution/v1beta1/validators/{}',
      block: 'http://a15f3be10859e4a70b8a1f156a4e8cd5-624465546.us-east-1.elb.amazonaws.com:1317/cosmos/tx/v1beta1/txs/block/{}',
    },
    channels: {},
    tokens: [
      {
        token: 'uluna',
        symbol: 'LUNA',
        name: 'Test Terra Luna',
        icon: process.env.CF_PAGES_URL + '/img/coins/Luna.svg',
        decimals: 6,
      }
    ],
  }
  