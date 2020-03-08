const fs = require('fs')
const express = require('express')

const isBlank = require('./utils')

const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.post('/blogs', (req, res) => {
    const blog = req.body
    const title = blog.title
    const content = blog.content
    if (isBlank(title) || isBlank(content)) {
        return res.status(400).send('Error')    
    }
    res.status(201).send(blog)
    fs.writeFileSync(title, content);
    res.end('ok')
})

app.listen(port, () => {
    console.log('Server up and running on port ' + port)
})
