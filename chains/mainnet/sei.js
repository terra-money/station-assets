module.exports = {
    chainID: 'pacific-1',
    lcd: 'https://lcd-sei.tfl.foundation',
    gasAdjustment: 2,
    gasPrices: { usei: 0.1 },
    prefix: 'sei',
    coinType: '118',
    baseAsset: 'usei',
    name: 'Sei',
    icon: process.env.CF_PAGES_URL + '/img/chains/sei.svg',
    channels: {
      'osmosis-1': 'channel-0',
      'axelar-dojo-1': 'channel-2',
      'phoenix-1': 'channel-3',
      'cosmoshub-4': 'channel-1',
      'migaloo-1': 'channel-10',
      'stride-1': 'channel-11',
    },
    explorer: {
      address: 'https://www.mintscan.io/sei/account/{}',
      tx: 'https://www.mintscan.io/sei/txs/{}',
      validator: 'https://www.mintscan.io/sei/validators/{}',
      block: 'https://www.mintscan.io/sei/blocks/id/{}',
    },
    tokens: [
      {
        token: 'usei',
        symbol: 'SEI',
        name: 'Sei',
        icon: process.env.CF_PAGES_URL + '/img/coins/sei.svg',
        decimals: 6,
      },
      {
        token: "factory/sei1thgp6wamxwqt7rthfkeehktmq0ujh5kspluw6w/OIN",
        name: "OIN STORE OF VALUE",
        symbol: "OIN",
        decimals: 6,
        icon: process.env.CF_PAGES_URL + "/img/coins/oin.png"
      }, 
      {
        token: "factory/sei1x2fgaaqecvk8kwuqkjqcj27clw5p5g99uawdzy9sc4rku8avumcq3cky4k/ampSEI",
        name: "ERIS Amplified SEI",
        symbol: "ampSEI",
        decimals: 6,
        icon: process.env.CF_PAGES_URL + "/img/coins/ampsei.svg"
      },
      {
        token: "factory/sei1fl8pg59wfsgw2wp4aruk38zqccfnc2g8ptrm24/popeye", 
        name: "Popeye", 
        symbol: "POPEYE", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/popeye.png"
      },
      {
        token: "factory/sei1ta5rkr6y2qlkj7px8w2cvear7m2822q4f4ea0m/sensei", 
        name: "Sensei Dog", 
        symbol: "SENSEI", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/SenseiDog.png"
      }
    ],
  }
  