module.exports = {
    chainID: 'mainnet-3',
    lcd: 'https://rest.mainnet.decentr.xyz',
    gasAdjustment: 1.75,
    gasPrices: { udec: 0.025 },
    prefix: 'decentr',
    coinType: '118',
    baseAsset: 'udec',
    name: 'Decentr',
    icon: 'https://station-assets.terra.money/img/chains/Decentr.svg',
    ibc: {
        toTerra: 'channel-99',
        fromTerra: 'channel-5',
    },
    explorer: {
        address: 'https://ping.pub/decentr/account/{}',
        tx: 'https://ping.pub/decentr/tx/{}',
        validator: 'https://ping.pub/decentr/validators/{}',
        block: 'https://ping.pub/decentr/blocks/id/{}',
    },
    tokens: [
        {
            token: 'udec',
            symbol: 'DEC',
            name: 'Decentr',
            icon: 'https://station-assets.terra.money/img/coins/Decentr.svg',
            decimals: 6,
        },
    ],
}
