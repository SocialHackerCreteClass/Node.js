'use strict'

const fetch = require("node-fetch");

const url = "http://api.icndb.com/jokes/random";

async function chuckNorris(url){
    const quote = await fetch(url);
    const jsonQuote = await quote.json();
    console.log(jsonQuote.value.joke);
}

chuckNorris(url);
