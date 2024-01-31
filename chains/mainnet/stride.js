module.exports = {
  "chainID": "stride-1",
  "lcd": "https://stride-fleet.main.stridenet.co/api",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ustrd": 0.005
  },
  "prefix": "stride",
  "coinType": "118",
  "baseAsset": "ustrd",
  "name": "Stride",
  "icon": "undefined/img/chains/Stride.png",
  "channels": {
    "phoenix-1": "channel-52",
    "axelar-dojo-1": "channel-69",
    "carbon-1": "channel-47",
    "comdex-1": "channel-49",
    "cosmoshub-4": "channel-0",
    "crescent-1": "channel-51",
    "juno-1": "channel-24",
    "kaiyo-1": "channel-18",
    "osmosis-1": "channel-5",
    "neutron-1": "channel-123",
    "pacific-1": "channel-149",
    "injective-1": "channel-6",
    "dydx-mainnet-1": "channel-160",
    "stargaze-1": "channel-19"
  },
  "explorer": {
    "address": "https://www.mintscan.io/stride/account/{}",
    "tx": "https://www.mintscan.io/stride/txs/{}",
    "validator": "https://www.mintscan.io/stride/validators/{}",
    "block": "https://www.mintscan.io/stride/blocks/id/{}"
  },
  "tokens": [
    {
      "token": "ustrd",
      "symbol": "STRD",
      "name": "Stride",
      "icon": "undefined/img/coins/Stride.png",
      "decimals": 6
    },
    {
      "token": "stuluna",
      "symbol": "stLUNA",
      "name": "Stride LUNA",
      "icon": "undefined/img/coins/stLUNA.svg",
      "decimals": 6,
      "lsd": "uluna"
    },
    {
      "token": "stuatom",
      "symbol": "stATOM",
      "name": "stATOM",
      "icon": "undefined/img/coins/stATOM.svg",
      "decimals": 6,
      "lsd": "uatom"
    },
    {
      "token": "stustars",
      "symbol": "stSTARS",
      "name": "stSTARS",
      "icon": "undefined/img/coins/stSTARS.svg",
      "decimals": 6,
      "lsd": "ustars"
    },
    {
      "token": "stinj",
      "symbol": "stINJ",
      "name": "stINJ",
      "icon": "undefined/img/coins/stINJ.svg",
      "decimals": 18,
      "lsd": "inj"
    },
    {
      "token": "stujuno",
      "symbol": "stJUNO",
      "name": "stJUNO",
      "icon": "undefined/img/coins/stJUNO.svg",
      "decimals": 6,
      "lsd": "ujuno"
    },
    {
      "token": "stuosmo",
      "symbol": "stOSMO",
      "name": "stOSMO",
      "icon": "undefined/img/coins/stOSMO.svg",
      "decimals": 6,
      "lsd": "uosmo"
    },
    {
      "token": "staevmos",
      "symbol": "stEVMOS",
      "name": "stEVMOS",
      "icon": "undefined/img/coins/stEVMOS.svg",
      "decimals": 18,
      "lsd": "aevmos"
    },
    {
      "token": "stuumee",
      "name": "Stride Staked UMEE",
      "symbol": "stUMEE",
      "decimals": 6,
      "icon": "undefined/img/coins/stumee.svg"
    },
    {
      "token": "stucmdx",
      "name": "Stride Staked CMDX",
      "symbol": "stCMDX",
      "decimals": 6,
      "icon": "undefined/img/coins/stcmdx.svg"
    },
    {
      "token": "stusomm",
      "name": "Stride Staked SOMM",
      "symbol": "stSOMM",
      "decimals": 6,
      "icon": "undefined/img/coins/stsomm.svg"
    }
  ],
  "version": "0.46"
}