module.exports = {
  "chainID": "injective-1",
  "lcd": "https://lcd-injective.tfl.foundation",
  "gasAdjustment": 1.75,
  "gasPrices": {
    "inj": 1000000000
  },
  "prefix": "inj",
  "coinType": "60",
  "baseAsset": "inj",
  "name": "Injective",
  "icon": "undefined/img/chains/Injective.svg",
  "channels": {
    "phoenix-1": "channel-151",
    "axelar-dojo-1": "channel-84",
    "cosmoshub-4": "channel-1",
    "crescent-1": "channel-90",
    "migaloo-1": "channel-102",
    "osmosis-1": "channel-8",
    "stride-1": "channel-89",
    "kaiyo-1": "channel-98"
  },
  "explorer": {
    "address": "https://www.mintscan.io/injective/account/{}",
    "tx": "https://www.mintscan.io/injective/txs/{}",
    "validator": "https://www.mintscan.io/injective/validators/{}",
    "block": "https://www.mintscan.io/injective/blocks/id/{}"
  },
  "tokens": [
    {
      "token": "inj",
      "symbol": "INJ",
      "name": "Injective",
      "icon": "undefined/img/coins/Injective.svg",
      "decimals": 18
    },
    {
      "token": "factory/inj14lf8xm6fcvlggpa7guxzjqwjmtr24gnvf56hvz/autism",
      "symbol": "AUTISM",
      "name": "AUTISM",
      "icon": "undefined/img/coins/AUTISM.png",
      "decimals": 6
    },
    {
      "token": "factory/inj1cdwt8g7nxgtg2k4fn8sj363mh9ahkw2qt0vrnc/ampINJ",
      "symbol": "ampINJ",
      "name": "ERIS Amplified INJ",
      "icon": "undefined/img/coins/ampINJ.png",
      "decimals": 6
    },
    {
      "token": "factory/inj1xtel2knkt8hmc9dnzpjz6kdmacgcfmlv5f308w/ninja",
      "name": "Dog wif nunchucks",
      "symbol": "NINJA",
      "decimals": 6,
      "icon": "undefined/img/coins/ninja.png"
    },
    {
      "token": "factory/inj1esz96ru3guug4ctmn5chjmkymt979sfvufq0hs/PUNK",
      "name": "Punk DAO Token",
      "symbol": "PUNK",
      "decimals": 6,
      "icon": "undefined/img/coins/PunkDAO.png"
    },
    {
      "token": "factory/inj1rmjzj9fn47kdmfk4f3z39qr6czexxe0yjyc546/WGMI",
      "name": "WGMI",
      "symbol": "WGMI",
      "decimals": 6,
      "icon": "undefined/img/coins/wgmi.png"
    }
  ],
  "version": "0.46"
}