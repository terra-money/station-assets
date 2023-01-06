const glob = require('glob')
const fs = require('fs').promises

;(async () => {
  // create build directory
  fs.mkdir('./build', { recursive: true })

  // convert chains to json
  glob('./chains/*/*.js', async (_, files) => {
    const chainsOutPath = './build/chains.json'
    const chainsOut = {}

    files.forEach((file) => {
      const [_, folder, network, fileName] = file.split('/')

      if (typeof chainsOut[network] === 'undefined') {
        chainsOut[network] = {}
      }

      const fullPath = `./${file}`
      const chainData = require(fullPath)
      chainsOut[network][chainData.chainID] = chainData
    })
    // Format the JSON with indentions before writing.
    const jsonList = JSON.stringify(chainsOut, null, 2)
    await fs.writeFile(chainsOutPath, jsonList)
  })
})()
