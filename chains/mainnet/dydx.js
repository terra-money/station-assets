module.exports = {
  "chainID": "dydx-mainnet-1",
  "lcd": "https://lcd-dydx.tfl.foundation",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "adydx": 12500000000
  },
  "prefix": "dydx",
  "coinType": "118",
  "baseAsset": "adydx",
  "name": "dYdX Protocol",
  "icon": "undefined/img/chains/dydx.svg",
  "channels": {
    "kaiyo-1": "channel-5",
    "noble-1": "channel-0",
    "osmosis-1": "channel-3",
    "stride-1": "channel-1",
    "phoenix-1": "channel-9"
  },
  "icsChannels": {},
  "explorer": {
    "address": "https://www.mintscan.io/dydx/account/{}",
    "tx": "https://www.mintscan.io/dydx/txs/{}",
    "validator": "https://www.mintscan.io/dydx/validators/{}",
    "block": "https://www.mintscan.io/dydx/blocks/id/{}"
  },
  "tokens": [
    {
      "token": "adydx",
      "name": "dYdX",
      "symbol": "DYDX",
      "decimals": 18,
      "icon": "undefined/img/coins/dydx.svg"
    }
  ],
  "version": "0.46"
}