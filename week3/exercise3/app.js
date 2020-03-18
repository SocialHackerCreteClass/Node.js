const fetch = require('node-fetch');

const url = 'https://reservation100-sandbox.mxapps.io/api/reservations';
const body = {
  name: 'John Doe',
  numberOfPeople: 3
}

fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(res => res.text())
  .then(data => console.log(data));