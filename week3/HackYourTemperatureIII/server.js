const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');
const APIKEY = require('./sources/keys.json').API_KEY;

const app = express();
const port = 3000;
const url = 'https://api.openweathermap.org/data/2.5/weather';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('/', (req, res) => {
  res.render('index')
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  axios(url + `?q=${cityName}&units=metric&APPID=${APIKEY}`)
    .then(result => {
      res.render('index', {
        weather: result.data.weather[0].description,
        weatherText: `Current temperature in ${cityName} is: ${result.data.main.temp}°C`,
        feelsLike: result.data.main.feels_like + '°C'
      });
    })
    .catch(err => {
      console.log(err) // TODO Remove later
      res.render('index', { weatherText: 'City not found' });
    })
});

app.listen(port, () => console.log(`App listening on port ${port}`));