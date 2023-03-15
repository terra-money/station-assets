const { exec } = require('child_process')
const core = require('@actions/core')

const fileLCD = process.argv

const lcdList = async (array) => {
  const list = []
  var failedUrls = []
  array.forEach((element) => {
    if (element.includes('https')) {
      list.push(element.split(',')[0])
    }
  })
  for (let url of list) {
    await checkCorsHeader(url, failedUrls)
  }

  failedUrls = await Promise.all(failedUrls)
  return { list, failedUrls }
}

const checkCorsHeader = (url, failedUrl) => {
  const cmd1 = `curl -s -D - -o /dev/null ${url}`

  return new Promise((resolve, reject) => {
    exec(cmd1, (err, stdout, stderr) => {
      const pattern = new RegExp('access-control-allow-*')
      if (err) {
        console.error(`Error running curl command: ${err}`)
        failedUrl.push(`Error running curl command: ${err}`)
        reject(failedUrl)
      }

      if (!pattern.test(stdout)) {
        failedUrl.push(`${url} is missing a CORS header. ${stdout}`)
      }
      resolve(failedUrl)
    })
  })
}

const getList = async (urlsPreSplit) => {
  const { failedUrls } = await lcdList(urlsPreSplit)
  if (failedUrls.length > 0) {
    core.setFailed(failedUrls)
  }
}

getList(fileLCD)
