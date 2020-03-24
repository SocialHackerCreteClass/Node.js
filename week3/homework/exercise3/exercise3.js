'use strict'

const fetch = require("node-fetch");

const url = "https://reservation100-sandbox.mxapps.io/api/reservations";

const booking = {
    name: "Jesus Christ",
    numberOfPeople: 13
}

const reservation = {
    method: "POST",
    body: JSON.stringify(booking),
    headers : { 'Content-Type': 'application/json'}
};

async function party(url, reservation){
    const books = await fetch(url, reservation);
    const txtBooks = await books.text();
    console.log(txtBooks);
}

party(url, reservation)
    .catch(error => {
        console.log("Error...");
        console.error(error);
    })
