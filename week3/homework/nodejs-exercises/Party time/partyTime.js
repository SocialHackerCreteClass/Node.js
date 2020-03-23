'use strict'

const fetch = require('node-fetch');
const body = {
    name: 'Anastas Stelios',
    numberOfPeople: 2
}

fetch('https://reservation100-sandbox.mxapps.io/api/reservations', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => {
        return res.text()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));