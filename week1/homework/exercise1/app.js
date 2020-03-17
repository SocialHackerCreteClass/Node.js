const padLeft = require('./awesome-function');

const numbers = [ '12', '846', '2', '1236' ];

for (let num of numbers) {
  console.log(padLeft(num, 4, '_'));
}
