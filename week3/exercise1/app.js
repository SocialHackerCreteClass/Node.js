const fetch = require('node-fetch');

const url = 'https://api.icndb.com/jokes/random';

fetch(url)
  .then(result => result.json())
  .then(data => console.log(data.value.joke))