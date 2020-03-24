"use strict"

const Handlebars = require("handlebars");
const express = require("express");
const path = require("path");

const app = express();

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", 
"clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

function getLines(subjectsArray, punchLinesArray){
    const subject = subjectsArray[Math.floor(Math.random()*7)];
    const punchline = punchLinesArray[Math.floor(Math.random()*7)];

    const source = "<p>{{subject}} is great to {{punchline}}</p>";
    const template = Handlebars.compile(source);

    const data = template({subject, punchline});
    //document.querySelector("#id").innerHTML += data;
    
    console.log(`${subject} is great to ${punchline}`);
}

getLines(subjects, punchlines);

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, "", "index.html"))
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));
