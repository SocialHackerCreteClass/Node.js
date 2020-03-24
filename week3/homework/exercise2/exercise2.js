'use strict'

const fetch = require("node-fetch");

const url = "https://restapiabasicauthe-sandbox.mxapps.io/api/books";
const codedAuth = Buffer.from('admin:hvgX8KlVEa').toString('base64');
const auth = {
    headers: {
        "Authorization": "Basic" + codedAuth
    }
}

async function chuckNorris(url, auth){
    const books = await fetch(url, auth);
    const jsonBooks = await books.json();
    console.log(jsonBooks);
}

chuckNorris(url, auth);
