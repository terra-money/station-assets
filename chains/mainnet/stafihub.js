module.exports = {
  "chainID": "stafihub-1",
  "lcd": "https://public-rest-rpc1.stafihub.io",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ufis": 0.025
  },
  "prefix": "stafi",
  "coinType": "118",
  "baseAsset": "ufis",
  "name": "StaFiHub",
  "disabledModules": [
    "staking"
  ],
  "icon": "undefined/img/chains/StaFiHub.png",
  "channels": {
    "phoenix-1": "channel-9",
    "cosmoshub-4": "channel-0",
    "chihuahua-1": "channel-4",
    "carbon-1": "channel-5",
    "kaiyo-1": "channel-6"
  },
  "explorer": {
    "address": "https://www.mintscan.io/stafi/accounts/{}",
    "tx": "https://www.mintscan.io/stafi/transactions/{}",
    "validator": "https://www.mintscan.io/stafi/validators/{}",
    "block": "https://www.mintscan.io/stafi/blocks/{}"
  },
  "tokens": [
    {
      "token": "ufis",
      "symbol": "FIS",
      "name": "FIS",
      "icon": "undefined/img/coins/FIS.png",
      "decimals": 6
    },
    {
      "token": "uratom",
      "symbol": "rATOM",
      "name": "rATOM",
      "icon": "undefined/img/coins/rATOM.svg",
      "decimals": 6
    },
    {
      "token": "uriris",
      "symbol": "rIRIS",
      "name": "rIRIS",
      "icon": "undefined/img/coins/rIRIS.svg",
      "decimals": 6
    },
    {
      "token": "urhuahua",
      "symbol": "rHUAHUA",
      "name": "rHUAHUA",
      "icon": "undefined/img/coins/rHUAHUA.svg",
      "decimals": 6
    },
    {
      "token": "urswth",
      "symbol": "rSWTH",
      "name": "rSWTH",
      "icon": "undefined/img/coins/rSWTH.svg",
      "decimals": 8,
      "lsd": "swth"
    }
  ],
  "version": "0.46"
}