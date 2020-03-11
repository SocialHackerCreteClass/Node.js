const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Hi, there');
});

app.post('/blogs', (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('ok');
})

app.put('/blogs', (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    res.end('post does not exist');
  }
});

app.delete('/blogs/:title', (req, res) => {
  let title = req.params.title;
  fs.unlinkSync(title);
  res.end('ok');
});

app.get('/blogs/:title', (req, res) => {
  let title = req.params.title;
  res.sendFile(path.join(__dirname, title));
  res.end('ok');
});

app.listen(port, () => console.log(`App listening on port ${port}`));