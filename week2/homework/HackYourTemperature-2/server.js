const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.get('', (req, res) => {
    res.render('index')
})

app.post('/weather', (req, res) => {
    const cityName = req.body.cityName
    // console.log(cityName)
    res.send(cityName)
})

app.listen(3000)
