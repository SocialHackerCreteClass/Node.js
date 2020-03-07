const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.port || 3000

app.use(express.json())

app.post('/blogs', (req, res) => {
    const blog = req.body
    const title = blog.title
    const content = blog.content
    res.send(blog)
    fs.writeFileSync(title, content);
    res.end('ok')
})

app.listen(port, () => {
    console.log('Server up and running on port ' + port)
})
