const express = require('express')
const app = express();
const fetch = require('node-fetch')
//Here goes the URL of the API we want to consume.
const apiUrl = ' https://restapiabasicauthe-sandbox.mxapps.io/api/books'

//these are the given credentials
const credentials = 'admin:hvgX8KlVEa'
//and here we convert them to a pass in form of base64
const convertedPass = (Buffer.from(credentials).toString('base64'))



fetch(apiUrl, { headers: { 'Authorization': 'Basic' + convertedPass } })
    .then(res => res.json())
    .then(json => console.log(json));


