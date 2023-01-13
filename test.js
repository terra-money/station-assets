const { Hash } = require('@keplr-wallet/crypto')

function calculateIBCDenom(channel, denom) {
  return (
    'ibc/' +
    Buffer.from(Hash.sha256(Buffer.from(`transfer/${channel}/${denom}`)))
      .toString('hex')
      .toUpperCase()
  )
}

console.log(calculateIBCDenom('channel-188', 'cw20:harkonnen13ehuhysn5mqjeaheeuew2gjs785f6k7jm8vfsqg3jhtpkwppcmzq2qvlmz'))