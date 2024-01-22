module.exports = {
    chainID: 'neutron-1',
    lcd: 'https://lcd-neutron.tfl.foundation',
    gasAdjustment: 1.75,
    gasPrices: { 
      untrn: 0.84,
      'ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9': 0.03,
      'ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349': 0.3,
    },
    prefix: 'neutron',
    coinType: '118',
    baseAsset: 'untrn',
    name: 'Neutron',
    icon: process.env.CF_PAGES_URL + '/img/chains/Neutron.png',
    disabledModules: ['staking', 'gov'],
    channels: {
      'osmosis-1': 'channel-10',
      'stride-1': 'channel-8',
      'axelar-dojo-1': 'channel-2',
      'cosmoshub-4': 'channel-1',
      'mars-1': 'channel-16',
      'kaiyo-1': 'channel-3',
      'phoenix-1': 'channel-25',
      'stargaze-1': 'channel-18',
    },
    icsChannels: {
    },
    explorer: {
      address: 'https://www.mintscan.io/neutron/account/{}',
      tx: 'https://www.mintscan.io/neutron/tx/{}',
      validator: 'https://www.mintscan.io/neutron/validators/{}',
      block: 'https://www.mintscan.io/neutron/blocks/id/{}',
    },
    tokens: [
      {
        token: 'untrn',
        symbol: 'NTRN',
        name: 'Neutron',
        icon: process.env.CF_PAGES_URL + '/img/coins/Neutron.png',
        decimals: 6,
      },
      {
        token: 'uatom',
        symbol: 'ATOM',
        name: 'Cosmos',
        icon: process.env.CF_PAGES_URL + '/img/coins/Cosmos.svg',
        decimals: 6,
      },
      {
        token: 'uusdc',
        symbol: 'USDC',
        name: 'usdc',
        icon: process.env.CF_PAGES_URL + '/img/coins/axlUSDC.svg',
        decimals: 6,
      },
      {
        token: 'factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH',
        symbol: 'wstETH',
        name: 'Wrapped Lido Staked Ether',
        icon: process.env.CF_PAGES_URL + '/img/coins/WstETH.svg',
        decimals: 18,
      },
      {
        token: "factory/neutron14henrqx9y328fjrdvz6l6d92r0t7g5hk86q5nd/uastropepe",
        name: "AstroPepe",
        symbol: "ASTROPEPE",
        decimals: 6,
        icon: process.env.CF_PAGES_URL + "/img/coins/astropepe.png"
      }, 
      {
        token: "factory/neutron1p8d89wvxyjcnawmgw72klknr3lg9gwwl6ypxda/newt",
        name: "Newt",
        symbol: "NEWT",
        decimals: 6,
        icon: process.env.CF_PAGES_URL + "/img/coins/newt.png"
      }, 
      {
        token: "factory/neutron1tklm6cvr2wxg8k65t8gh5ewslnzdfd5fsk0w3f/corgi",
        name: "Baby Corgi",
        symbol: "CORGI",
        decimals: 6,
        icon: process.env.CF_PAGES_URL + "/img/coins/babycorgi.png"
      },
      {
        token: "factory/neutron170v88vrtnedesyfytuku257cggxc79rd7lwt7q/ucircus", 
        name: "AtomEconomicZone69JaeKwonInu", 
        symbol: "CIRCUS", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/circus.png"
      }, 
      {
        token: "factory/neutron108x7vp9zv22d6wxrs9as8dshd3pd5vsga463yd/JIMMY", 
        name: "jimmy", 
        symbol: "JIMMY", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/jimmy.png"
      }, 
      {
        token: "factory/neutron143wp6g8paqasnuuey6zyapucknwy9rhnld8hkr/bad", 
        name: "Badcoin", 
        symbol: "BAD", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/bad.png"
      },
      {
        token: "neutron1fjzg7fmv770hsvahqm0nwnu6grs3rjnd2wa6fvm9unv6vedkzekqpw44qj", 
        name: "Bitcosmos", 
        symbol: "BTC", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/bitcosmos.png"
      },
      {
        token: "neutron12h09p8hq5y4xpsmcuxxzsn9juef4f6jvekp8yefc6xnlwm6uumnsdk29wf", 
        name: "wtf", 
        symbol: "WTF", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/WTF.png"
      }, 
      {
        token: "factory/neutron1t5qrjtyryh8gzt800qr5vylhh2f8cmx4wmz9mc/ugoddard", 
        name: "Goddard", 
        symbol: "GODDARD", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/goddardntrn.png"
      },
      {
        token: "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO", 
        name: "Apollo", 
        symbol: "APOLLO", 
        decimals: 6, 
        icon: process.env.CF_PAGES_URL + "/img/coins/apollo.png"
      },
    ],
  }
  
