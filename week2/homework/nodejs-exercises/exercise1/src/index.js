const fs = require('fs')
const express = require('express')
const isBlank = require('./utils')

const app = express()
const port = 3000

app.use(express.json())

app.post('/blogs', (req, res) => {
    const blog = req.body
    const title = blog.title
    const content = blog.content

    if (isBlank(title) || isBlank(content)) {
        return res.status(400).send('Error')
    }
    res.status(201).send(blog)
    fs.writeFileSync(title, content)
})

app.patch('/blogs', (req, res) => {
    const blog = req.body
    const title = blog.title
    const content = blog.content

    if (isBlank(content)) {
        return res.status(400).send('Content cannot be blank')
    }
    else if (fs.existsSync(title)) {
        res.status(200).send(blog)
        fs.writeFileSync(title, content);
    }
    else {
        res.end('Post does not exist');
    }
})

app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title
    if (!title) { // DOES NOT WORK
        return res.status(404).send()
    }
    res.send('Deleted: ' + title)
    fs.unlinkSync(title);
    res.end('ok');  
})

app.listen(port, () => {
    console.log('Server up and running on port ' + port)
})
