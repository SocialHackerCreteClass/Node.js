const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.port || 3000

app.listen(port, () => {
    console.log('Server up and running on port ' + port)
})