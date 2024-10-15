module.exports = {
  chainID: 'archway-1',
  lcd: 'https://lcd-archway.tfl.foundation',
  gasAdjustment: 1.75,
  gasPrices: { aarch: 1500000000000 },
  prefix: 'archway',
  coinType: '118',
  baseAsset: 'aarch',
  name: 'Archway',
  icon: process.env.CF_PAGES_URL + '/img/chains/Archway.png',
  channels: {
    'axelar-dojo-1': 'channel-13',
    'cosmoshub-4': 'channel-0',
    'kaiyo-1': 'channel-11',
    'osmosis-1': 'channel-1',
    'juno-1': 'channel-15',
    'crescent-1': 'channel-6',
    'andromeda-1': 'channel-97',
  },
  explorer: {
    address: 'https://www.mintscan.io/archway/account/{}',
    tx: 'https://www.mintscan.io/archway/txs/{}',
    validator: 'https://www.mintscan.io/archway/validators/{}',
    block: 'https://www.mintscan.io/archway/blocks/id/{}',
  },
  tokens: [
    {
      token: 'aarch',
      symbol: 'ARCH',
      name: 'Archway',
      icon: process.env.CF_PAGES_URL + '/img/coins/Aarch.png',
      decimals: 18,
    },
    {
      token:
        'archway135pmrdfsu8le852q5xztwdlxpmzqrp2t589lrqtw2athnr70wgcqg26ecc',
      name: 'xAXL',
      symbol: 'xAXL',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xaxl.svg',
    },
    {
      token:
        'archway1cutfh7m87cyq5qgqqw49f289qha7vhsg6wtr6rl5fvm28ulnl9ssg0vk0n',
      name: 'xARCH',
      symbol: 'xARCH',
      decimals: 18,
      icon: process.env.CF_PAGES_URL + '/img/coins/xarch.svg',
    },
    {
      token:
        'archway1fwurjg7ah4v7hhs6xsc3wutqpvmahrfhns285s0lt34tgfdhplxq6m8xg5',
      name: 'ampARCH',
      symbol: 'ampARCH',
      decimals: 18,
      icon: process.env.CF_PAGES_URL + '/img/coins/amparch.svg',
    },
    {
      token:
        'archway1m273xq2fjmn993jm4kft5c49w2c70yfv5zypt3d92cqp4n5faefqqkuf0l',
      name: 'xATOM',
      symbol: 'xATOM',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xatom.svg',
    },
    {
      token:
        'archway1mast3w89sn8gtmvdhr6gfemu4jdx60563fajs5ucsc7s7e9jv00q7qw0hu',
      name: 'xBCNA',
      symbol: 'xBCNA',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xbcna.svg',
    },
    {
      token:
        'archway1t2llqsvwwunf98v692nqd5juudcmmlu3zk55utx7xtfvznel030saclvq6',
      name: 'sARCH',
      symbol: 'sARCH',
      decimals: 18,
      icon: process.env.CF_PAGES_URL + '/img/coins/sarch.svg',
    },
    {
      token:
        'archway1veyq07az0d7mlp49sa9f9ef56w0dd240vjsy76yv0m4pl5a2x2uq698cs7',
      name: 'xDEC',
      symbol: 'xDEC',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xdec.svg',
    },
    {
      token:
        'archway1yjdgfut7jkq5xwzyp6p5hs7hdkmszn34zkhun6mglu3falq3yh8sdkaj7j',
      name: 'xJKL',
      symbol: 'xJKL',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xjkl.svg',
    },
    {
      token:
        'archway1ndrruk2atj4yrcqsnypthvnexjv6erpwtczqlfp8d97zsv8k6wgqjmw4gt',
      name: 'xQWOYN',
      symbol: 'xQWOYN',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/xqwoyn.svg',
    },
    {
      token:
        'archway1ecjefhcf8r60wtfnhwefrxhj9caeqa90fj58cqsaafqveawn6cjs5znd2n',
      name: 'Astrovault AXV',
      symbol: 'AXV',
      decimals: 6,
      icon: process.env.CF_PAGES_URL + '/img/coins/axv.svg',
    },
    {
      token:
        'archway17e3z7cr6d29uj54k4ucs6dtqvlxsxhwnwzetqgnp6zeu40cvq7dsd8q60x',
      name: 'BackBone Labs Liquid Staked Archway',
      symbol: 'bARCH',
      decimals: 18,
      icon: process.env.CF_PAGES_URL + '/img/coins/barch.png',
    },
    {
      token:
        'archway12yurzx8zynv3ck7uh4tucre48tqsm4fac4hfk9p3l24qs2cn08dqr684cg',
      name: '"Architects Token',
      symbol: 'TOKN',
      decimals: 18,
      icon: process.env.CF_PAGES_URL + '/img/coins/tokn.png',
    },
    // {
    //   token: "archway1yv8uhe795xs4fwz6mjm278yr35ps0yagjchfp39q5x49dty9jgssm5tnkv",
    //   name: "xBLD",
    //   symbol: "xBLD",
    //   decimals: 6,
    //   icon: process.env.CF_PAGES_URL + '/img/coins/xbld.svg',
    // },
    // {
    //   token: "archway1zfnzv39cp4dv3jjy0aptn5msc02tjmy602l46u90dt729q80939qjgqcdj",
    //   name: "xGRAV",
    //   symbol: "xGRAV",
    //   decimals: 6,
    //   icon: process.env.CF_PAGES_URL + '/img/coins/xgrav.svg',
    // },
    // {
    //   token: "archway14fzmzu2apcdzwx9dspyk0yjmxwwnpmxh7zlezh5ywe4l0pky39ysgzd9gg",
    //   name: "xCMDX",
    //   symbol: "xCMDX",
    //   decimals: 6,
    //   icon: process.env.CF_PAGES_URL + '/img/coins/xcmdx.svg',
    // },
    // {
    //   token: "archway1asgu5g79cdjcdd40lgefplszehykpwzcunx30ca4456a4tddmwcsrmtvx8",
    //   name: "xFLIX",
    //   symbol: "xFLIX",
    //   decimals: 6,
    //   icon: process.env.CF_PAGES_URL + '/img/coins/xflix.svg',
    // },
  ],
}
