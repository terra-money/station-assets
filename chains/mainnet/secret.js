module.exports = {
    chainID: 'secret-4',
    lcd: 'https://secret.express',
    gasAdjustment: 1.75,
    gasPrices: { uscrt: 0.0125  },
    prefix: 'secret',
    coinType: '529',
    baseAsset: 'uscrt',
    name: 'Secret Network',
    icon: 'https://station-assets.terra.money/img/chains/Secret.svg',
    ibc: {
      fromTerra: 'channel-3',
      toTerra: 'channel-17',
    }
  }
