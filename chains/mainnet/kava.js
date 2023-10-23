module.exports = {
    chainID: 'kava_2222-10',
    lcd: 'https://lcd-kava.keplr.app',
    gasAdjustment: 1.75,
    gasPrices:
    {
        'ukava': 0.1
    },
    prefix: 'kava',
    coinType: 459,
    baseAsset: 'ukava',
    name: 'Kava',
    icon: process.env.CF_PAGES_URL + '/img/chains/Kava.svg',
    channels:
    {
        'osmosis-1': 'channel-1',
        'cosmoshub-4': 'channel-0',
        'akashnet-2': 'channel-5',
        'kaiyo-1': 'channel-116',
        'migaloo-1': 'channel-120',
        'injective-1': 'channel-122',
        'phoenix-1': 'channel-129',
        // 'evmos_9001-2': 'channel-117',
        // 'exchain-66': 'channel-82',
        // 'canto_7700-1': 'channel-87',
        // 'xstaxy-1': 'channel-124',
        // 'umee-1': 'channel-119',
        // 'mun-1': 'channel-123',
        // 'cronosmainnet_25-1': 'channel-125',
    },
    icsChannels:
        {},
    explorer:
    {
        address: 'https://www.mintscan.io/kava/account/{}',
        tx: 'https://www.mintscan.io/kava/txs/{}',
        validator: 'https://www.mintscan.io/kava/validators/{}',
        block: 'https://www.mintscan.io/kava/blocks/id/{}',
    },
    tokens:[
        {
            token: 'ukava',
            symbol: 'KAVA',
            name: 'Kava',
            icon: process.env.CF_PAGES_URL + '/img/coins/Kava.svg',
            decimals: 6,
        },
        {
            token: 'hard',
            symbol: 'HARD',
            name: 'Hard',
            icon: process.env.CF_PAGES_URL + '/img/coins/Hard.svg',
            decimals: 6,
        },
        {
            token: 'swp',
            symbol: 'SWP',
            name: 'Swap',
            icon: process.env.CF_PAGES_URL + '/img/coins/Swp.svg',
            decimals: 6,
        },
        {
            token: 'usdx',
            symbol: 'USDX',
            name: 'USDX',
            icon: process.env.CF_PAGES_URL + '/img/coins/usdx.svg',
            decimals: 6,
        },
        {
            token: 'erc20/tether/usdt',
            symbol: 'USDT',
            name: 'Tether USD',
            icon: process.env.CF_PAGES_URL + '/img/coins/USDT.svg',
            decimals: 6,
        }
    ]
}