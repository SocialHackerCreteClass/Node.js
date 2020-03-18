const express = require('express');
const exphbs = require('express-handlebars')

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/', (req, res) => {
  res.render('index')
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});

app.listen(port, () => console.log(`App listening on port ${port}`));