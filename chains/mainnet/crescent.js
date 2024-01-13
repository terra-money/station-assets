module.exports = {
  chainID: 'crescent-1',
  lcd: 'https://lcd-crescent.tfl.foundation',
  gasAdjustment: 1.5,
  gasPrices: { ucre: 0.025 },
  prefix: 'cre',
  coinType: '118',
  baseAsset: 'ucre',
  name: 'Crescent',
  icon: process.env.CF_PAGES_URL + '/img/chains/Crescent.svg',
  channels: {
    'phoenix-1': 'channel-27',
    'axelar-dojo-1': 'channel-4',
    'akashnet-2': 'channel-44',
    'comdex-1': 'channel-49',
    'cosmoshub-4': 'channel-1',
    'juno-1': 'channel-3',
    'kaiyo-1': 'channel-42',
    'mars-1': 'channel-35',
    'osmosis-1': 'channel-9',
    'stride-1': 'channel-29',
    'archway-1': 'channel-65',
    'noble-1': 'channel-38',
    'injective-1': 'channel-23',
    'stargaze-1': 'channel-21',
  },
  explorer: {
    address: 'https://www.mintscan.io/crescent/account/{}',
    tx: 'https://www.mintscan.io/crescent/txs/{}',
    validator: 'https://www.mintscan.io/crescent/validators/{}',
    block: 'https://www.mintscan.io/crescent/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ucre',
      symbol: 'CRE',
      name: 'Crescent',
      icon: process.env.CF_PAGES_URL + '/img/coins/Crescent.svg',
      decimals: 6,
    },
    {
      token: "ubcre",
      name: "Bonded Crescent",
      symbol: "bCRE",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/bcre.svg"
    }
  ],
}
