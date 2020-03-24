`use strict`

const express = require("express");
const path = require("path");
// const exphbs = require("express-handlebars");  // HANDLEBARS MIDDLEWARE. To index folders easier. 

const app = express();
const message = "hello from backend to frontend!";

app.get("/", (req, res) => res.send(message));

//app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));  // Just to check the msg was sent in the right port.
