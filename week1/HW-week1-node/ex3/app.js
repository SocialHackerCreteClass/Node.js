var http = require("http");

//create a server
let server = http.createServer(function(req, res) {
  if (req.url === "/script.js") {
    res.setHeader("Content-Type", "text/javascript");
    res.write(`document
        .getElementById('content')
        .appendChild(document.createTextNode('Welcome to Server-land!'));`);
    res.end();
  } else if (req.url === "/style.css") {
    res.setHeader("Content-Type", "text/css");
    res.write(`#content { color: blue }`);
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <head>
    <title>My First Web Server</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    
    <div id="content">
    <h1>Hello, anyone there?</h1>
    </div>
    <script src="script.js"></script>
</body>
</html>`);
    res.end(); //send a response back to the client
  }
  //end the response
});

server.listen(3000, "127.0.0.1"); //the server listens on port 3000
