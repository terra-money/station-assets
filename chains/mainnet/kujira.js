module.exports = {
  chainID: 'kaiyo-1',
  lcd: 'https://kujira-api.nodes.defiantlabs.net',
  gasAdjustment: 1.75,
  gasPrices: {
    ukuji: 0.00119,
    'ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986': 0.000625,
    'ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F': 0.0015,
    /*
    'ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2': 0.000125,
    'ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23': 0.00126,
    'ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07': 0.00652,
    'ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10': 617283951,
    'ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5': 0.000288,
    'ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5': 0.00137,
    'ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602': 0.0488,
    'ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2': 78492936,
    'ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7': 964351
    */
  },
  prefix: 'kujira',
  coinType: '118',
  baseAsset: 'ukuji',
  name: 'Kujira',
  icon: process.env.CF_PAGES_URL + '/img/chains/Kujira.png',
  ibc: {
    fromTerra: 'channel-10',
    toTerra: 'channel-5',
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-36',
      fromTerra: 'channel-28',
    },
  },
  alliance: true,
  explorer: {
    address: 'https://www.mintscan.io/kujira/account/{}',
    tx: 'https://www.mintscan.io/kujira/txs/{}',
    validator: 'https://www.mintscan.io/kujira/validators/{}',
    block: 'https://www.mintscan.io/kujira/blocks/id/{}',
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
        'factory:kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7:uusk',
      symbol: 'USK',
      name: 'USK',
      icon: process.env.CF_PAGES_URL + '/img/coins/USK.svg',
      decimals: 6,
    },
    {
      token:
        'factory:kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty:ampKUJI',
      symbol: 'ampKUJI',
      name: 'ERIS Amplified KUJI',
      icon: process.env.CF_PAGES_URL + '/img/coins/ampKUJI.svg',
      decimals: 6,
    },
    {
      token: 'factory:kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6:local',
      symbol: 'LOCAL',
      name: 'Local Money',
      icon: process.env.CF_PAGES_URL + '/img/coins/Local.png',
      decimals: 6,
    },
    {
      token:
        'factory:kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a:ulp',
      symbol: 'LP KUJI-ATOM',
      name: 'LP KUJI-ATOM',
      icon: '',
      decimals: 6,
    },
    {
      token: 'factory:kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7:umnta',
      symbol: 'MNTA',
      name: 'MNTA',
      icon: '',
      decimals: 6,
    },
  ],
}
