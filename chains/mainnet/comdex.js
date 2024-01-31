module.exports = {
  "chainID": "comdex-1",
  "lcd": "https://lcd-comdex.tfl.foundation",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "ucmdx": 0.025
  },
  "prefix": "comdex",
  "coinType": "118",
  "baseAsset": "ucmdx",
  "name": "Comdex",
  "icon": "undefined/img/chains/Comdex.svg",
  "channels": {
    "phoenix-1": "channel-51",
    "axelar-dojo-1": "channel-34",
    "crescent-1": "channel-26",
    "juno-1": "channel-18",
    "migaloo-1": "channel-63",
    "osmosis-1": "channel-1",
    "stride-1": "channel-45"
  },
  "explorer": {
    "address": "https://www.mintscan.io/comdex/account/{}",
    "tx": "https://www.mintscan.io/comdex/txs/{}",
    "validator": "https://www.mintscan.io/comdex/validators/{}",
    "block": "https://www.mintscan.io/comdex/blocks/id/{}"
  },
  "tokens": [
    {
      "token": "ucmdx",
      "symbol": "CMDX",
      "name": "Comdex",
      "icon": "undefined/img/coins/Comdex.svg",
      "decimals": 6
    },
    {
      "token": "ucmst",
      "symbol": "CMST",
      "name": "Composite",
      "icon": "undefined/img/coins/CMST.svg",
      "decimals": 6
    },
    {
      "token": "uharbor",
      "symbol": "HARBOR",
      "name": "Harbor",
      "icon": "undefined/img/coins/Harbor.svg",
      "decimals": 6
    }
  ],
  "version": "0.46"
}