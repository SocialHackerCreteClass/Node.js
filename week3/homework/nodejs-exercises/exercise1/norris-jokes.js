const express = require('express')
const app = express()

const fetch = require('node-fetch');

const apiUrl = "http://api.icndb.com/jokes/random"


fetch(apiUrl)
    .then(res => res.json())
    .then(json => console.log(json['value']['joke']));


