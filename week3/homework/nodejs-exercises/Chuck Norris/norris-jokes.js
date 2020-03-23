'use strict'

const fetch = require('node-fetch');

fetch('http://api.icndb.com/jokes/random').then((response) => {
    return response.json();
}).then(data => {
    console.log(data.value.joke);
});