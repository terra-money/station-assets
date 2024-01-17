module.exports = {
    chainID: 'osmo-test-5',
    lcd: 'https://lcd.osmotest5.osmosis.zone',
    gasAdjustment: 1.5,
    gasPrices: {
      uosmo: {
        type: 'OSMOSIS',
        url: '/osmosis/txfees/v1beta1/cur_eip_base_fee',
        adjustment: 10,
        // value to be used if the request to the LCD fails
        defaultValue: 0.0025 * 10,
      },
    },
    prefix: 'osmo',
    coinType: '118',
    baseAsset: 'uosmo',
    name: 'Osmosis',
    icon: process.env.CF_PAGES_URL + '/img/chains/Osmosis.svg',
    channels: {
    },
    explorer: {
      address: 'https://testnet.mintscan.io/osmosis-testnet/account/{}',
      tx: 'https://testnet.mintscan.io/osmosis-testnet/txs/{}',
      validator: 'https://testnet.mintscan.io/osmosis-testnet/validators/{}',
      block: 'https://testnet.mintscan.io/osmosis-testnet/blocks/id/{}',
    },
    tokens: [
      {
        token: 'uosmo',
        symbol: 'OSMO',
        name: 'Osmosis',
        icon: process.env.CF_PAGES_URL + '/img/coins/Osmo.svg',
        decimals: 6,
      },
      {
        token: 'uion',
        symbol: 'ION',
        name: 'Ion',
        icon: process.env.CF_PAGES_URL + '/img/coins/Ion.svg',
        decimals: 6,
      }
    ],
  }
  