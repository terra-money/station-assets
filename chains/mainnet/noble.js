module.exports = {
  chainID: 'noble-1',
  lcd: 'https://noble-api.polkachu.com',
  gasAdjustment: 1.75,
  gasPrices: { uosmo: 0.025 }, // <-- update this
  prefix: 'noble',
  coinType: '118',
  baseAsset: 'uosmo', // <-- update this
  name: 'Noble',
  icon: 'https://station-assets.terra.money/img/chains/Noble.svg',
  ibc: {
    toTerra: 'channel-',   // <-- update this
    fromTerra: 'channel-',   // <-- update this
  },
  explorer: {
    address: 'https://www.mintscan.io/noble/account/{}',
    tx: 'https://www.mintscan.io/noble/txs/{}',
    validator: 'https://www.mintscan.io/noble/validators/{}',
    block: 'https://www.mintscan.io/noble/blocks/id/{}',
  },
  tokens: [
    // add your NATIVE tokens here (do NOT add IBC tokens, our build script calculate them automatically using the provided channel-id)
    // this is an example of how a token should look like:
    {
      token: 'uosmo',
      symbol: 'OSMO',
      name: 'Osmosis',
      icon: 'https://station-assets.terra.money/img/coins/Noble.svg',
      decimals: 6,
    },
  ],
}
