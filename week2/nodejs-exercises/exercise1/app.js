const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const fs = require("fs");
app.use(express.json())

app.post('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    let title = req.body.title
    let content = req.body.content

    fs.writeFileSync(title, content);
    res.send("ok")
})

const path = require("path")

app.put('/blogs', (req, res) => {
    // How to get the tile and content from the request??
    let title = req.body.title
    let content = req.body.content


    if (fs.existsSync(title)) {
        fs.writeFileSync(title, content);

        res.end('ok')
    }
    else {
        res.end('post does not exist');
    }
})


app.delete('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    let title = req.params.title

    fs.unlinkSync(title);
    res.end('ok');
})

app.get('/blogs/:title', (req, res) => {
    // How to get the tilte from the url parameters?
    let file = req.params.title;
    if (fs.existsSync(file)) {
        res.send(req.body.content)
    }

    res.end("file not found")
})


