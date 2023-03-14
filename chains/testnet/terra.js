module.exports = {
  chainID: 'pisco-1',
  lcd: 'https://pisco-lcd.terra.dev',
  gasAdjustment: 3.5,
  gasPrices: { uluna: 0.015 },
  prefix: 'terra',
  coinType: '330',
  baseAsset: 'uluna',
  name: 'Terra',
  icon: 'https://station-assets.terra.money/img/chains/Terra.svg',
  explorer: {
    address: "https://terrasco.pe/testnet/address/{}",
    tx: "https://terrasco.pe/testnet/tx/{}",
    validator: "https://terrasco.pe/testnet/validator/{}",
    block: "https://terrasco.pe/testnet/block/{}",
  },
  tokens: [
    {
      token: 'uluna',
      symbol: 'LUNA',
      name: 'Terra Luna',
      icon: 'https://station-assets.terra.money/img/coins/Luna.svg',
      decimals: 6,
    },
    {
      token: 'terra1jltsv4zjps5veugu6xc0gkurrjx33klhyxse80hy8pszzvhslx0s2n7jkk',
      symbol: 'sORD',
      name: 'Staked Ordos Token',
      icon: 'https://station-assets.terra.money/img/coins/sOrdos.png',
      decimals: 6,
    },
    {
      token: 'terra1lertn5hx2gpw940a0sspds6kydja3c07x0mfg0xu66gvu9p4l30q7ttd2p',
      symbol: 'sCOR',
      name: 'Staked Corrino Token',
      icon: 'https://station-assets.terra.money/img/coins/sCorrino.png',
      decimals: 6,
    },
    {
      token: 'terra14y9aa87v4mjvpf0vu8xm7nvldvjvk4h3wly2240u0586j4l6qm2q7ngp7t',
      symbol: 'sHAR',
      name: 'Staked Harkonnen Token',
      icon: 'https://station-assets.terra.money/img/coins/sHarkonnen.png',
      decimals: 6,
    },
    {
      token: 'terra15rqy5xh7sclu3yltuz8ndl8lzudcqcv3laldxxsxaph085v6mdpqdjrucv',
      symbol: 'sATR',
      name: 'Staked Atreides Token',
      icon: 'https://station-assets.terra.money/img/coins/sAtreides.png',
      decimals: 6,
    }
  ],
}
