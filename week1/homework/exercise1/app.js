
let padLeft = require("./andrejs-awesome-function")

//console.log(padLeft('5', 2, '0'))

let numbers = ["12", "846", "2", "1236"]

numbers.forEach(number => {
  console.log(padLeft(number, 4, "_"))
})

