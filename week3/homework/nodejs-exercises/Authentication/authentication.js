'use strict'

const fetch = require('node-fetch');

const nameAndPass = 'admin:hvgX8KlVEa';
let buffer = Buffer.from(nameAndPass);
const decodedBuffer = buffer.toString('base64');

fetch('https://restapiabasicauthe-sandbox.mxapps.io/api/books', { headers: { 'Authorization': `Basic ${decodedBuffer}` } }).then((response) => {
    return response.json();
}).then(data => {
    data.forEach(item => {
        console.log(`${item.title} from ${item.author}`);
    })
}).catch(error => {
    console.log(error);
});