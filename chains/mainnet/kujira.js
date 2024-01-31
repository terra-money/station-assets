module.exports = {
  "version": "0.46",
  "chainID": "kaiyo-1",
  "lcd": "https://lcd-kujira.tfl.foundation",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ukuji": 0.0051,
    "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986": 0.02243,
    "ibc/295548A78785A1007F232DE286149A6FF512F180AF5657780FC89C009E2C348F": 0.01785,
    "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2": 0.00193,
    "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23": 0.02692,
    "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta": 0.02711,
    "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk": 0.01779
  },
  "prefix": "kujira",
  "coinType": "118",
  "baseAsset": "ukuji",
  "name": "Kujira",
  "icon": "undefined/img/chains/Kujira.png",
  "channels": {
    "phoenix-1": "channel-5",
    "axelar-dojo-1": "channel-9",
    "carbon-1": "channel-46",
    "akashnet-2": "channel-64",
    "cosmoshub-4": "channel-0",
    "crescent-1": "channel-67",
    "mars-1": "channel-55",
    "migaloo-1": "channel-58",
    "osmosis-1": "channel-3",
    "stride-1": "channel-35",
    "archway-1": "channel-99",
    "noble-1": "channel-62",
    "stafihub-1": "channel-63",
    "neutron-1": "channel-75",
    "injective-1": "channel-54",
    "dydx-mainnet-1": "channel-118",
    "stargaze-1": "channel-7"
  },
  "alliance": true,
  "explorer": {
    "address": "https://finder.kujira.network/kaiyo-1/address/{}",
    "tx": "https://finder.kujira.network/kaiyo-1/tx/{}",
    "validator": "https://blue.kujira.network/stake/{}",
    "block": "https://finder.kujira.network/kaiyo-1/block/{}"
  },
  "tokens": [
    {
      "token": "ukuji",
      "symbol": "KUJI",
      "name": "Kujira",
      "icon": "undefined/img/coins/Kuji.svg",
      "decimals": 6
    },
    {
      "token": "factory/kujira1qk00h5atutpsv900x202pxx42npjr9thg58dnqpa72f2p7m2luase444a7/uusk",
      "symbol": "USK",
      "name": "USK",
      "icon": "undefined/img/coins/USK.svg",
      "decimals": 6
    },
    {
      "token": "factory/kujira1n3fr5f56r2ce0s37wdvwrk98yhhq3unnxgcqus8nzsfxvllk0yxquurqty/ampKUJI",
      "symbol": "ampKUJI",
      "name": "ERIS Amplified KUJI",
      "icon": "undefined/img/coins/ampKUJI.svg",
      "decimals": 6
    },
    {
      "token": "factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local",
      "symbol": "LOCAL",
      "name": "Local Money",
      "icon": "undefined/img/coins/Local.png",
      "decimals": 6
    },
    {
      "token": "factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp",
      "symbol": "LP KUJI-ATOM",
      "name": "LP KUJI-ATOM",
      "icon": "",
      "decimals": 6
    },
    {
      "token": "factory/kujira1643jxg8wasy5cfcn7xm8rd742yeazcksqlg4d7/umnta",
      "symbol": "MNTA",
      "name": "MNTA",
      "icon": "undefined/img/coins/MNTA.svg",
      "decimals": 6
    },
    {
      "token": "factory/kujira175yatpvkpgw07w0chhzuks3zrrae9z9g2y6r7u5pzqesyau4x9eqqyv0rr/ampMNTA",
      "symbol": "ampMNTA",
      "name": "ampMNTA",
      "icon": "undefined/img/coins/ampMNTA.png",
      "decimals": 6
    },
    {
      "token": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/ufuzn",
      "symbol": "FUZN",
      "name": "Fuzion",
      "icon": "undefined/img/coins/fuzn.png",
      "decimals": 6
    },
    {
      "token": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/urfuzn",
      "symbol": "rFUZN",
      "name": "Fuzion Receipt",
      "icon": "undefined/img/coins/rfuzn.png",
      "decimals": 6
    },
    {
      "token": "factory/kujira1aaudpfr9y23lt9d45hrmskphpdfaq9ajxd3ukh/unstk",
      "symbol": "NSTK",
      "name": "Unstake Fi",
      "icon": "undefined/img/coins/nstk.svg",
      "decimals": 6
    },
    {
      "token": "factory/kujira1m96ucsfpt2yy72w09z2rxjdj38y5qd8lqx5jtggnejmdua2ynpnsxyvjex/urcpt",
      "name": "qcKUJI",
      "symbol": "qcKUJI",
      "decimals": 6,
      "icon": "undefined/img/coins/qckuji.svg"
    },
    {
      "token": "factory/kujira1qzu3up50auxhqyzfq56znuj8n38q2ra7daaf9ef7vg8gu66jh4fqd2wd2y/urcpt",
      "name": "qcMNTA",
      "symbol": "qcMNTA",
      "decimals": 6,
      "icon": "undefined/img/coins/qcmnta.svg"
    },
    {
      "token": "factory/kujira12cjjeytrqcj25uv349thltcygnp9k0kukpct0e/uwink",
      "name": "WINK",
      "symbol": "WINK",
      "decimals": 6,
      "icon": "undefined/img/coins/wink.svg"
    },
    {
      "token": "factory/kujira1slueerjz7mx9jp45u3y0rjwtvhcf8a68wf2mjt/ublend",
      "name": "BLEND",
      "symbol": "BLEND",
      "decimals": 6,
      "icon": "undefined/img/coins/blend.svg"
    },
    {
      "token": "factory/kujira1sc6a0347cc5q3k890jj0pf3ylx2s38rh4sza4t/uyfuzn",
      "name": "Fuzion Yield",
      "symbol": "yFUZN",
      "decimals": 6,
      "icon": "undefined/img/coins/fuziony.svg"
    },
    {
      "token": "factory/kujira166ysf07ze5suazfzj0r05tv8amk2yn8zvsfuu7/uplnk",
      "name": "Plankton",
      "symbol": "PLNK",
      "decimals": 6,
      "icon": "undefined/img/coins/PLNK_drk.png"
    },
    {
      "token": "factory/kujira1l04ged98c7a7s9tllu62ld09ztylwf442qgm4thfgmadrvngeumsz4zrh2/urcpt",
      "name": "qcFUZN",
      "symbol": "qcFUZN",
      "decimals": 6,
      "icon": "undefined/img/coins/qcfuzn.svg"
    }
  ]
}