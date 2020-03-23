const leftPad = require('left-pad')

let number = Math.floor(Math.random() * 10) + 1

console.log(leftPad(number, 8, "**"))