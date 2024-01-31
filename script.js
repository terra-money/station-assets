const fs = require('fs');
const path = require('path');
const axios = require('axios');

const mainnetPath = path.join(__dirname, 'chains/mainnet');
const files = fs.readdirSync(mainnetPath);

files.forEach(file => {

    const filePath = path.join(mainnetPath, file);
    if (filePath.endsWith('disabled')) return
    const data = require(filePath);
    axios.get(data.lcd + '/cosmos/gov/v1/proposals?pagination.limit=9')
        .then(response => {
            if (response.status === 200) {
                data.version = '0.46';
                fs.writeFileSync(filePath, 'module.exports = ' + JSON.stringify(data, null, 2));
            }
        })
        .catch(error => console.error(error));
});