const padLeft = require('left-pad')
let numbers = ["12", "846", "2", "1236"];
 

numbers.forEach(function(number){
    console.log(padLeft(number, 8 , " "));
});