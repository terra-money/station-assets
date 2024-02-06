module.exports = {
  chainID: 'osmosis-1',
  lcd: 'https://lcd-osmosis.tfl.foundation',
  gasAdjustment: 1.5,
  version: "0.46",
  gasPrices: {
    uosmo: {
      type: 'OSMOSIS',
      url: '/osmosis/txfees/v1beta1/cur_eip_base_fee',
      adjustment: 10,
      // value to be used if the request to the LCD fails
      defaultValue: 0.0025 * 10,
    },
  },
  prefix: 'osmo',
  coinType: '118',
  baseAsset: 'uosmo',
  name: 'Osmosis',
  icon: process.env.CF_PAGES_URL + '/img/chains/Osmosis.svg',
  channels: {
    'phoenix-1': 'channel-251',
    'axelar-dojo-1': 'channel-208',
    'carbon-1': 'channel-188',
    'akashnet-2': 'channel-1',
    'cheqd-mainnet-1': 'channel-108',
    'chihuahua-1': 'channel-113',
    'comdex-1': 'channel-87',
    'cosmoshub-4': 'channel-0',
    'crescent-1': 'channel-297',
    'mainnet-3': 'channel-181',
    'juno-1': 'channel-42',
    'kaiyo-1': 'channel-259',
    'mars-1': 'channel-557',
    'migaloo-1': 'channel-642',
    'stride-1': 'channel-326',
    'archway-1': 'channel-1429',
    'neutron-1': 'channel-874',
    'noble-1': 'channel-750',
    'pacific-1': 'channel-782',
    'injective-1': 'channel-122',
    'celestia': 'channel-6994',
    'dydx-mainnet-1': 'channel-6787',
    'stargaze-1': 'channel-75',
    'dymension_1100-1': 'channel-19774',
  },
  explorer: {
    address: 'https://www.mintscan.io/osmosis/account/{}',
    tx: 'https://www.mintscan.io/osmosis/txs/{}',
    validator: 'https://www.mintscan.io/osmosis/validators/{}',
    block: 'https://www.mintscan.io/osmosis/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uosmo',
      symbol: 'OSMO',
      name: 'Osmosis',
      icon: process.env.CF_PAGES_URL + '/img/coins/Osmo.svg',
      decimals: 6,
    },
    {
      token: 'uion',
      symbol: 'ION',
      name: 'Ion',
      icon: process.env.CF_PAGES_URL + '/img/coins/Ion.svg',
      decimals: 6,
    },
    {
      token:
        'factory/osmo14klwqgkmackvx2tqa0trtg69dmy0nrg4ntq4gjgw2za4734r5seqjqm4gm/uibcx',
      symbol: 'IBCX',
      name: 'IBCX',
      icon: process.env.CF_PAGES_URL + '/img/coins/Ibcx.svg',
      decimals: 6,
    },
    {
      token: "factory/osmo1xqw2sl9zk8a6pch0csaw78n4swg5ws8t62wc5qta4gnjxfqg6v2qcs243k/stuibcx",
      name: "Staked IBCX",
      symbol: "stIBCX",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/stibcx.svg"
    }, 
    {
      token: "factory/osmo1dv8wz09tckslr2wy5z86r46dxvegylhpt97r9yd6qc3kyc6tv42qa89dr9/ampOSMO",
      name: "ERIS Amplified OSMO",
      symbol: "ampOSMO",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/amposmo.png"
    }, 
    {
      token: "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/ucdt",
      name: "CDT Stablecoin",
      symbol: "CDT",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/CDT.svg"
    }, 
    {
      token: "factory/osmo1s794h9rxggytja3a4pmwul53u98k06zy2qtrdvjnfuxruh7s8yjs6cyxgd/umbrn",
      name: "Membrane",
      symbol: "MBRN",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/MBRN.svg"
    }, 
    {
      token: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/squosmo",
      name: "OSMO Squared",
      symbol: "sqOSMO",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/sqosmo.svg"
    }, 
    {
      token: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqbtc",
      name: "BTC Squared",
      symbol: "sqBTC",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/sqbtc.svg"
    }, 
    {
      token: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqatom",
      name: "ATOM Squared",
      symbol: "sqATOM",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/sqatom.svg"
    }, 
    {
      token: "factory/osmo1mlng7pz4pnyxtpq0akfwall37czyk9lukaucsrn30ameplhhshtqdvfm5c/ulvn",
      name: "Levana",
      symbol: "LVN",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/levana.svg"
    }, 
    {
      token: "factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA",
      name: "milkTIA",
      symbol: "milkTIA",
      decimals: 6,
      icon: process.env.CF_PAGES_URL + "/img/coins/milktia.svg"
    },
    {
      token: "factory/osmo1z0qrq605sjgcqpylfl4aa6s90x738j7m58wyatt0tdzflg2ha26q67k743/wbtc", 
      name: "Wrapped Bitcoin", 
      symbol: "WBTC", 
      decimals: 8, 
      icon: process.env.CF_PAGES_URL + "/img/coins/wbtc.svg"
    },
    {
      token: "factory/osmo1pfyxruwvtwk00y8z06dh2lqjdj82ldvy74wzm3/WOSMO", 
      name: "WOSMO", 
      symbol: "WOSMO", 
      decimals: 6, 
      icon: process.env.CF_PAGES_URL + "/img/coins/WOSMO.png"
    }, 
    {
      token: "factory/osmo1g8qypve6l95xmhgc0fddaecerffymsl7kn9muw/sqtia", 
      name: "TIA Squared", 
      symbol: "sqTIA", 
      decimals: 6, 
      icon: process.env.CF_PAGES_URL + "/img/coins/sqtia.svg"
    },
    {
      token: "factory/osmo1rckme96ptawr4zwexxj5g5gej9s2dmud8r2t9j0k0prn5mch5g4snzzwjv/sail", 
      name: "Sail", 
      symbol: "SAIL", 
      decimals: 6, 
      icon: process.env.CF_PAGES_URL + "/img/coins/sail.png"
    }
  ],
}
