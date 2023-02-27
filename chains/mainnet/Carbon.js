module.exports = {
  chainID: 'carbon-1',
  lcd: 'https://query-api.carbon.network/',
  gasAdjustment: 1.75,
  gasPrices: { swth: 100000000 },
  prefix: 'swth',
  coinType: '118',
  baseAsset: 'swth',
  name: 'Carbon',
  icon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47d20fa5-6095-43d4-86fc-0b00f5f7fcf6/Logo_Primary_White.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230227T155055Z&X-Amz-Expires=86400&X-Amz-Signature=a46c9621fd80f6eb0438eb5bbdb82f8d9576c186bbe54406876ccafe9bc83ab5&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Logo_Primary_White.svg%22&x-id=GetObject',
  ibc: {
    fromTerra: 'channel-36',
    toTerra: 'channel-12',
  }
}
