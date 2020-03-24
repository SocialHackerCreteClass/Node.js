`use strict`

const axios = require("axios");
const express = require("express");
const exphbs = require("express-handlebars"); 
const path = require("path");
const API_KEY = require('./sources/key.json').API_KEY;
const cities = require('./sources/city.list.json');

const cityInfo = {
    weatherText: "",
    image: "./imgs/mist.jpg"
}
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')));

// Handlebrs Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", (req, res) => res.render('index', {
    weatherText: cityInfo.weatherText,
    image: cityInfo.image
}));

app.post("/weather", async (req, res) => {
    const city = { name : req.body.cityName } 
    let cityId = null; 
    
    cities.forEach(el => {
        if(el.name.toLowerCase() === city.name.toLowerCase())
            cityId = el.id;
    });

    if(cityId !== null){
        await axios(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${API_KEY}`)
            .then(res => {
                const temp = (parseFloat(res.data.main.temp) - 273.15).toFixed(2);
                cityInfo.weatherText = `${res.data.name}: There is ${res.data.weather[0].description} 
                                    and the temperature is ${temp}° today`;
                cityInfo.image = `./imgs/${res.data.weather[0].main.toLowerCase()}.jpg`;
            })
            .catch(err => {
                console.log("There was an error reading the city's weather information.");
            });
    } else {
        cityInfo.weatherText = "City is not found!";
    }
    
    res.redirect("/");
    res.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));  // Just to check the msg was sent in the right port.
