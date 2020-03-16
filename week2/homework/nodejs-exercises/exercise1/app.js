'use strict'

const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => {
//     res.send('Home Page');
// });

app.get('/blogs/:title', (req, res) => {
    const title = req.params.title;
    res.sendfile(title);
})

app.post('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    fs.writeFileSync(title, content);
    res.end('ok');
});

app.put('/blogs', (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    if (fs.existsSync(title)) {
        fs.writeFileSync(title, content);
        res.end('ok')
    }
    else {
        res.end('post does not exist');
    }
});

app.delete('/blogs/:title', (req, res) => {
    const title = req.params.title;
    fs.unlinkSync(title);
    res.end('ok');
});

app.listen(3000, () => {
    console.log(`Server is running!`);
});