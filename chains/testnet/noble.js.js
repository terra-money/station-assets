module.exports = {
  chainID: "grand-1",
  lcd: "https://noble-testnet-api.polkachu.com",
  gasAdjustment: 1.75,
  gasPrices: { uusdc: 0 },
  prefix: "noble",
  coinType: "118",
  baseAsset: "ustake",
  name: "Noble",
  icon: "https://station-assets.terra.money/img/chains/Noble.svg",
  ibc: {
    toTerra: "channel-TBD",
    fromTerra: "channel-TBD",
  },
  explorer: {
    address: "https://testnet.mintscan.io/noble-testnet/account/{}",
    tx: "https://testnet.mintscan.io/noble-testnet/txs/{}",
    validator: "https://testnet.mintscan.io/noble-testnet/validators/{}",
    block: "https://testnet.mintscan.io/noble-testnet/blocks/id/{}",
  },
  tokens: [
    {
      token: "ustake",
      symbol: "STAKE",
      name: "Stake",
      icon: `https://station-assets.terra.money/img/coins/Noble.svg`,
      decimals: 6,
    },
    {
      token: "uusdc",
      symbol: "USDC",
      name: "usdc",
      icon: `https://station-assets.terra.money/img/coins/axlUSDC.svg`,
      decimals: 6,
    },
  ],
};
