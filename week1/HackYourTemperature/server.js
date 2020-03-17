const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('hello from backend to frontend!');
});

app.listen(port, () => console.log(`App listening on port ${port}`));