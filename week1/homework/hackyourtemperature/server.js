const express = require('express')
const app = express()
var exphbs = require('express-handlebars');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));






app.get("/", (req, res) => {
    res.render('index', { title: "Weather App" })
})



const APIKEY = require("./views/sources/keys.json").API_KEY
const axios = require('axios');


app.post("/weather", (req, res) => {

    const cityName = req.body.cityName
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`

    axios.post(APIURL)
        .then(response => {
            console.log(response.data)
            let temp = response.data.main.temp
            res.render('index', { title: "Weather App", weatherText: `The current temperature at ${response.data.name} is ${(temp - 273.15).toFixed(1)} Celsius Degrees` })


        })
        .catch(error => {
            console.log(error);
            res.render('index', { title: "Weather App", weatherText: "City is not found!" })

        });



})





app.listen(3000, () => { console.log("It's Alive!!!!!") })