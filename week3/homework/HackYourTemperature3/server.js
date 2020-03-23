const express = require('express');
const exphbs = require('express-handlebars');
// const fetch = require('node-fetch');
const apiKey = require('./sources/keys.json').API_KEY;
const axios = require('axios');

const app = express();
// const apiKey = '3ca5afa75f12717d4da7cefd2539a6d2';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));


app.get('/', (req, res) => {
    res.render('./layouts/index', { weatherText: 'Please insert a city to display the weather' });
});

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName;
    axios(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric `)
        .then(resp => {
            console.log(resp.data);
            const weatherIconUrl = `http://openweathermap.org/img/w/${resp.data.weather[0].icon}.png`;
            const mainWeather = resp.data.weather[0].description;
            res.render('./layouts/weather', { data: resp.data, icon: weatherIconUrl, main: mainWeather.toUpperCase() });
        }).catch(error => {
            res.render('./layouts/index', { weatherText: 'City not found, please try again!' });
        });
});



app.listen(3000, () => {
    console.log(`Server is running...`);
});