
const fetch = require("node-fetch")



const apiUrl = 'https://reservation100-sandbox.mxapps.io/api/reservations'

const givenBody = {
    "name": "John Doe",
    "numberOfPeople": 3
}


fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(givenBody),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.text()) //after i checked the response from postman i convert it to text.
    .then(text => console.log(text));