module.exports = {
  chainID: 'juno-1',
  lcd: 'https://lcd-juno.mib.tech',
  gasAdjustment: 1.75,
  gasPrices: { ujuno: 0.0025 },
  prefix: 'juno',
  coinType: '118',
  baseAsset: 'ujuno',
  name: 'Juno',
  icon: 'https://station-assets.terra.money/img/chains/Juno.svg',
  ibc: {
    fromTerra: 'channel-2',
    toTerra: 'channel-86',
    ics: {
      contract:
        'juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
      toTerra: 'channel-154',
      fromTerra: 'channel-33',
    },
    icsFromTerra: {
      contract:
        'terra1e0mrzy8077druuu42vs0hu7ugguade0cj65dgtauyaw4gsl4kv0qtdf2au',
      toTerra: 'channel-153',
      fromTerra: 'channel-32',
    },
  },
  explorer: {
    address: 'https://www.mintscan.io/juno/account/{}',
    tx: 'https://www.mintscan.io/juno/txs/{}',
    validator: 'https://www.mintscan.io/juno/validators/{}',
    block: 'https://www.mintscan.io/juno/blocks/id/{}',
  },
  tokens: [
    {
      token: 'ujuno',
      symbol: 'JUNO',
      name: 'Juno',
      icon: 'https://station-assets.terra.money/img/coins/Juno.svg',
      decimals: 6,
    },
    {
      token: 'juno1a0khag6cfzu5lrwazmyndjgvlsuk7g4vn9jd8ceym8f4jf6v2l9q6d348a',
      symbol: 'ampJUNO',
      name: 'ERIS Amplified JUNO',
      icon: 'https://station-assets.terra.money/img/coins/ampJuno.svg',
      decimals: 6,
    },
    {
      token: 'juno173c59crjqeec28cpzs7n0y7hm4cd308zda8z6j4cnl6pct3stenseg2dxp',
      symbol: 'STEAK',
      name: 'Steak Token',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/Steak.png',
      decimals: 6
    },
    {
      token: 'juno1hnftys64ectjfynm6qjk9my8jd3f6l9dq9utcd3dy8ehwrsx9q4q7n9uxt',
      symbol: 'AQUA',
      name: 'Aqua',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/AQUA.png',
      decimals: 6
    },
    {
      token: 'juno1w7kspnu3j4hmzvsltsk00xujfa84sf502vs2zjcawl03vgn7vj3sww9mh7',
      symbol: 'AQUA',
      name: 'Aqua',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/AQUA.png',
      decimals: 6
    },
    {
      token: 'juno1hy0ky3pe742phd4w55tdfej0ez55h4jx4g06rp4wsa0mne9wzudqy4hum2',
      symbol: 'ARTO',
      name: 'Arto DAO',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/arto.png',
      decimals: 6
    },
    {
      token: 'juno1mvkgcr5uce2rnpzr4qrzf50hx4qreuwzlt7fzsjrhjud3xnjmttq5mkh2m',
      symbol: 'bJuno',
      name: 'bJuno',
      icon: 'https://app.whitewhale.money/logos/bJUNO.png',
      decimals: 6
    },
    {
      token: 'juno1y9rf7ql6ffwkv02hsgd4yruz23pn4w97p75e2slsnkm0mnamhzysvqnxaq',
      symbol: 'BLOCK',
      name: 'Block',
      icon: 'https://raw.githubusercontent.com/MarbleDAO/brand-assets/main/block.png',
      decimals: 6
    },
    {
      token: 'juno17r2vpc5enkyfe2xle9sedxdq3msfpacwcfp9rnr6jc3e7v6av0jqmfyfzp',
      symbol: 'BOOB',
      name: 'BOOBA',
      icon: '',
      decimals: 6
    },
    {
      token: 'juno1vaeuky9hqacenay9nmuualugvv54tdhyt2wsvhnjasx9s946hhmqaq3kh7',
      symbol: 'BFOT',
      name: 'Burned Fortis Oeconomia Token',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/bFOT.png',
      decimals: 10
    },
    {
      token: 'juno1vn38rzq0wc7zczp4dhy0h5y5kxh2jjzeahwe30c9cc6dw3lkyk5qn5rmfa',
      symbol: 'CANLAB',
      name: 'CANLAB',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/cannalabs.png',
      decimals: 3
    },
    {
      token: 'juno1t8dnpktypue65q0hjz7tr3cvqypgj5vkxhd2twvng4a2ywa3j25spjuk6z',
      symbol: 'PRIMO',
      name: 'Cardinal Finance ',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/primo.png',
      decimals: 6
    },
    {
      token: 'juno1ju8k8sqwsqu5k6umrypmtyqu2wqcpnrkf4w4mntvl0javt4nma7s8lzgss',
      symbol: 'CASA',
      name: 'CASA',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/CASA.png',
      decimals: 6
    },
    {
      token: 'juno1cl2ewl842wcnagz5psd68z4dpp4gfxrrm9atm807uvyyg235h85stg7awy',
      symbol: 'COIN',
      name: 'CoinDex',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/coindex.png',
      decimals: 6
    },
    {
      token: 'juno1x02k67asfmjawgc96dj8nxq6se3fmx36gedgs5hvkjegdhfy97rs3jgj2h',
      symbol: 'CZAR',
      name: 'CZAR',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/czar.png',
      decimals: 6
    },
    {
      token: 'juno1p32te9zfhd99ehpxfd06hka6hc9p7tv5kyl5909mzedg5klze09qrg08ry',
      symbol: 'DAISY',
      name: 'Daisy Finance ',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/daisy.png',
      decimals: 6
    },
    {
      token: 'juno1gzys54drag6753qq75mkt3yhjwyv4rp698kfvesh0wcy5737z4tsn0chtm',
      symbol: 'FUTURE',
      name: 'FUTURE OF',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/futuretoken.png',
      decimals: 6
    },
    {
      token: 'juno1j0a9ymgngasfn3l5me8qpd53l5zlm9wurfdk7r65s5mg6tkxal3qpgf5se',
      symbol: 'GLTO',
      name: 'Gelotto',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/glto.png',
      decimals: 6
    },
    {
      token: 'juno10ynpq4wchr4ruu6mhrfh29495ep4cja5vjnkhz3j5lrgcsap9vtssyeekl',
      symbol: 'gFOT',
      name: 'Grand Fortis Oeconomia Token',
      icon: '',
      decimals: 10
    },
    {
      token: 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z',
      symbol: 'HOPE',
      name: 'HOPE Galaxy',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/hopelogo.png',
      decimals: 6
    },
    {
      token: 'juno1g0wuyu2f49ncf94r65278puxzclf5arse9f3kvffxyv4se4vgdmsk4dvqz',
      symbol: 'HOWL',
      name: 'HOWL',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/HOWL.png',
      decimals: 6
    },
    {
      token: 'juno1pshrvuw5ng2q4nwcsuceypjkp48d95gmcgjdxlus2ytm4k5kvz2s7t9ldx',
      symbol: 'HULC',
      name: 'Hulcat',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/hulcat.png',
      decimals: 6
    },
    {
      token: 'juno1n7n7d5088qlzlj37e9mgmkhx6dfgtvt02hqxq66lcap4dxnzdhwqfmgng3',
      symbol: 'JOE',
      name: 'JoeDAO',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/joedao.png',
      decimals: 6
    },
    {
      token: 'juno10gthz5ufgrpuk5cscve2f0hjp56wgp90psqxcrqlg4m9mcu9dh8q4864xy',
      symbol: 'KLEO',
      name: 'Kleomedes',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/KLEO.png',
      decimals: 6
    },
    {
      token: 'juno1qsrercqegvs4ye0yqg93knv73ye5dc3prqwd6jcdcuj8ggp6w0us66deup',
      symbol: 'Loop',
      name: 'Loop',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/a46f3a10b8e67105233f358aa1de114fc34df221/images/loop.png',
      decimals: 6
    },
    {
      token: 'juno1g2g7ucurum66d42g8k5twk34yegdq8c82858gz0tq2fc75zy7khssgnhjl',
      symbol: 'MARBLE',
      name: 'MARBLE',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/marble.png',
      decimals: 3
    },
    {
      token: 'juno1p8x807f6h222ur0vssqy3qk6mcpa40gw2pchquz5atl935t7kvyq894ne3',
      symbol: 'MUSE',
      name: 'MUSE',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/MUSE.png',
      decimals: 6
    },
    {
      token: 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
      symbol: 'NETA',
      name: 'NETA',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/neta.png',
      decimals: 6
    },
    {
      token: 'juno17r8dyxuj25muaudhgqgx4xrg6gzr6tvzem6gwtpprnfld58yggcqjhhkjy',
      symbol: 'NMN',
      name: 'OpenNMN',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/nmn.png',
      decimals: 6
    },
    {
      token: 'juno1rws84uz7969aaa7pej303udhlkt3j9ca0l3egpcae98jwak9quzq8szn2l',
      symbol: 'PHMN',
      name: 'POSTHUMAN',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/PHMN.png',
      decimals: 6
    },
    {
      token: 'juno13926947pmrjly5p9hf5juey65c6rget0gqrnx3us3r6pvnpf4hwqm8mchy',
      symbol: 'PUNK',
      name: 'PUNK',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/punk.png',
      decimals: 6
    },
    {
      token: 'juno1r4pzw8f9z0sypct5l9j906d47z998ulwvhvqe5xdwgy8wf84583sxwh0pa',
      symbol: 'RAC',
      name: 'RAC',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/racoon.png',
      decimals: 6
    },
    {
      token: 'juno15u3dt79t6sxxa3x3kpkhzsy56edaa5a66wvt3kxmukqjz2sx0hes5sn38g',
      symbol: 'RAW',
      name: 'Raw',
      icon: 'https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/Raw.png',
      decimals: 6
    },
    {
      token: 'juno14lycavan8gvpjn97aapzvwmsj8kyrvf644p05r0hu79namyj3ens87650k',
      symbol: 'SGNL',
      name: 'Signal',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/sgnl.png',
      decimals: 6
    },
    {
      token: 'juno17c7zyezg3m8p2tf9hqgue9jhahvle70d59e8j9nmrvhw9anrpk8qxlrghx',
      symbol: 'sFOT',
      name: 'Stable Fortis Oeconomia Token',
      icon: '',
      decimals: 10
    },
    {
      token: 'juno147t4fd3tny6hws6rha9xs5gah9qa6g7hrjv9tuvv6ce6m25sy39sq6yv52',
      symbol: 'DRGN',
      name: 'Stake Dragons',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/drgn.png',
      decimals: 6
    },
    {
      token: 'juno1wwnhkagvcd3tjz6f8vsdsw5plqnw8qy2aj3rrhqr2axvktzv9q2qz8jxn3',
      symbol: 'bJUNO',
      name: 'StakeEasy bJUNO',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/bjuno.png',
      decimals: 6
    },
    {
      token: 'juno19rqljkh95gh40s7qdx40ksx3zq5tm4qsmsrdz9smw668x9zdr3lqtg33mf',
      symbol: 'SEASY',
      name: 'StakeEasy governance token',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/seasy.png',
      decimals: 6
    },
    {
      token: 'juno1dd0k0um5rqncfueza62w9sentdfh3ec4nw4aq4lk5hkjl63vljqscth9gv',
      symbol: 'seJUNO',
      name: 'StakeEasy seJUNO',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/sejuno.png',
      decimals: 6
    },
    {
      token: 'juno1wurfx334prlceydmda3aecldn2xh4axhqtly05n8gptgl69ee7msrewg6y',
      symbol: 'TUCK',
      name: 'Tuckermint',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/tuckermint.png',
      decimals: 3
    },
    {
      token: 'juno1kqx9rhc8ksx52tukdx797k4rjrhkgfh4gljs04ql97hmnnkgyvxs5cqt7d',
      symbol: 'VERSE',
      name: 'UniverseDAO',
      icon: 'https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/VERSE.png',
      decimals: 6
    },
    {
      token: 'juno1naunqzk6jseqeqhq43nm6kdneraws2rkmteprjzppw6j9xcrurxqx0ld9e',
      symbol: 'wyJUNO',
      name: 'wyJUNO',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/wyJUNO.png',
      decimals: 6
    },
    {
      token: 'juno1mkw83sv6c7sjdvsaplrzc8yaes9l42p4mhy0ssuxjnyzl87c9eps7ce3m9',
      symbol: 'WYND',
      name: 'WYND',
      icon: 'https://raw.githubusercontent.com/cosmorama/wynd-assets-list/main/images/WYND.svg',
      decimals: 6
    }
  ],
}
