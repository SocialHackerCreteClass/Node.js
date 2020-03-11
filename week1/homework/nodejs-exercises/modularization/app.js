const padLeft = require('./andrejs-awesome-function')

numbers = [
    '12',
    '846',
    '2',
    '1236'
]

numbers.forEach((el => {
    console.log(padLeft(el, 4, '_'))
}))
