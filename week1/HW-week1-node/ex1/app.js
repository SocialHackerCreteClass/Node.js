let printNumbers = require('./printNum-function.js')

numbers = ["12", "846", "2", "1236"]

numbers.forEach(element => {
    console.log(printNumbers(element, 4, "_"))
});

