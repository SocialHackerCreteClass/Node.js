// Library webapp

//create a server object:
const express = require("express");
const app = express();
const port = 8080;

const books = [
  {
    id: 1,
    name: "JavaScript for dummies",
    releaseDate: 2008
  },
  {
    id: 2,
    name: "Social Hackers Curriculum",
    releaseDate: 2017
  }
];
 
app.use(express.json());

app.get("/", (req, res) => res.send("Book collection"));

app.get("/books", (req, res) => res.send(books));

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
  
    const book = books.filter(book => book.id === parseInt(id));
    res.send(book[0]);
  });

  app.post("/books", (req, res) => {
    const theData = req.body;
    books.push(theData);
    res.send(theData);
  });
// TODO: get one specific book

// TODO: create book

app.listen(port, () => console.log("Server is up and running!"));
