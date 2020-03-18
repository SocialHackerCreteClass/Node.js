const padLeft = require('left-pad');

const numbers = [ '12', '846', '2', '1236' ];

for (let num of numbers) {
  console.log(padLeft(num, 8, '_'));
}
