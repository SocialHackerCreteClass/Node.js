`use strict`

const fs = require("fs");
const express = require("express");
const exphbs = require("express-handlebars");  // HANDLEBARS MIDDLEWARE. To index folders easier. 

const path = "./city.json";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Handlebrs Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", (req, res) => res.render('index'));

app.post("/weather", (req, res) => {
    const city = {
        name : req.body.cityName
    } 
    res.send(city);
    res.end();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));  // Just to check the msg was sent in the right port.
