const fetch = require('node-fetch');

const url = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
const buff = new Buffer.from('admin:hvgX8KlVEa');
const encodedAuth = buff.toString('base64')

fetch(url, {
  headers: {
    'Authorization': `Basic ${encodedAuth}`
  }
}).then(result => result.json())
  .then(data => console.log(data));