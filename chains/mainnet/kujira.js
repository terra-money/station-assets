module.exports = {
  chainID: 'kaiyo-1',
  lcd: 'https://lcd-kujira.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: {
    ukuji: 0.0051,
  'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986': 0.02243,
  'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F': 0.01785,
  'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': 0.00193,
  'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23': 0.02692,
  'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta': 0.02711,
  'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk': 0.01779,
    /*
    'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07': 0.98915,
    'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10': 240624594296,
    'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5': 0.04034,
    'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5': 0.04709,
    'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602': 1.35605,
    'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2': 838795256,
    'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7': 8659201,
    'ibc/FE98AAD68F02F03565E9FA39A5E627946699B2B07115889ED812D8BA639576A9': 0.01792,
    'ibc/E5CA126979E2FFB4C70C072F8094D07ECF27773B37623AD2BF7582AD0726F0F3': 0.00029,
    */
  },
  prefix: 'kujira',
  coinType: '118',
  baseAsset: 'ukuji',
  name: 'Kujira',
  icon: process.env.CF_PAGES_URL + '/img/chains/Kujira.png',
  channels: {
    'phoenix-1': 'channel-5',
    'axelar-dojo-1': 'channel-9',
    'carbon-1': 'channel-46',
    'akashnet-2': 'channel-64',
    'cosmoshub-4': 'channel-0',
    'crescent-1': 'channel-67',
    'mars-1': 'channel-55',
    'migaloo-1': 'channel-58',
    'osmosis-1': 'channel-3',
    'stride-1': 'channel-35',
    'archway-1': 'channel-99',
    'noble-1': 'channel-62',
    'stafihub-1': 'channel-63',
    'neutron-1': 'channel-75',
    'injective-1': 'channel-54',
    'dydx-mainnet-1': 'channel-118',
    'stargaze-1': 'channel-7',
    // 'andromeda-1': 'channel-123',
  },
  alliance: true,
  explorer: {
    address: 'https://finder.kujira.network/kaiyo-1/address/{}',
    tx: 'https://finder.kujira.network/kaiyo-1/tx/{}',
    validator: 'https://blue.kujira.network/stake/{}',
    block: 'https://finder.kujira.network/kaiyo-1/block/{}',
  },
  tokens: [
    {
      token: 'ukuji',
      symbol: 'KUJI',
      name: 'Kujira',
      icon: process.env.CF_PAGES_URL + '/img/coins/Kuji.svg',
      decimals: 6,
    },
    {
      token:
        'factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk',
      symbol: 'USK',
      name: 'USK',
      icon: process.env.CF_PAGES_URL + '/img/coins/USK.svg',
      decimals: 6,
    },
    {
      token:
        'factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI',
      symbol: 'ampKUJI',
      name: 'ERIS Amplified KUJI',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampKUJI.svg',
      decimals: 6,
    },
    {
      token: 'factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local',
      symbol: 'LOCAL',
      name: 'Local Money',
      icon: process.env.CF_PAGES_URL + '/img/coins/Local.png',
      decimals: 6,
    },
    {
      token:
        'factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp',
      symbol: 'LP KUJI-ATOM',
      name: 'LP KUJI-ATOM',
      icon: '',
      decimals: 6,
    },
    {
      token: 'factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta',
      symbol: 'MNTA',
      name: 'MNTA',
      icon: process.env.CF_PAGES_URL + '/img/coins/MNTA.svg',
      decimals: 6,
    },
    {
      token:
        'factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA',
      symbol: 'ampMNTA',
      name: 'ampMNTA',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampMNTA.png',
      decimals: 6,
    },
    {
      token:
        'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn',
      symbol: 'FUZN',
      name: 'Fuzion',
      icon: process.env.CF_PAGES_URL + '/img/coins/fuzn.png',
      decimals: 6,
    },
    {
      token:
        'factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn',
      symbol: 'rFUZN',
      name: 'Fuzion Receipt',
      icon: process.env.CF_PAGES_URL + '/img/coins/rfuzn.png',
      decimals: 6,
    },
    {
      token:
        'factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk',
      symbol: 'NSTK',
      name: 'Unstake Fi',
      icon: process.env.CF_PAGES_URL + '/img/coins/nstk.svg',
      decimals: 6,
    },
    {
      token: "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
      name: "qcKUJI",
      symbol: "qcKUJI",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/qckuji.svg"
    }, 
    {
      token: "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
      name: "qcMNTA",
      symbol: "qcMNTA",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/qcmnta.svg"
    }, 
    {
      token: "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
      name: "WINK",
      symbol: "WINK",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/wink.svg"
    }, 
    {
      token: "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
      name: "BLEND",
      symbol: "BLEND",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/blend.svg"
    }, 
    {
      token: "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
      name: "Fuzion Yield",
      symbol: "yFUZN",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/fuziony.svg"
    }, 
    {
      token: "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
      name: "Plankton",
      symbol: "PLNK",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/PLNK_drk.png"
    },
    {
      token: "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt", 
      name: "qcFUZN", 
      symbol: "qcFUZN", 
      decimals: 6, 
      icon: process.env.CF_PAGES_URL + "/img/coins/qcfuzn.svg"
    }
  ],
}
