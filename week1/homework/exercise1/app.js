'use strict'

const padLeft = require("./andrejs-awesome-function");

const numbers = [ "12", "846", "2", "1236" ];

numbers.forEach(element => console.log(padLeft(element, 4, " ")))