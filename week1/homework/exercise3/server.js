const http = require('http');
const fs = require('fs');

const html = `
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>My First Web Server</title>
  </head>
  <body>
    <h1>Hello, anyone there?</h1>
    <div id="content"></div>
    <script src="script.js"></script>
  </body>
</html>
`;
const css = fs.readFileSync('./style.css');
const javascript = `
document
  .getElementById('content')
  .appendChild(document.createTextNode('Welcome to Server-land!'));
`;

// Create a server
let server = http.createServer((req, res) => {
  if (req.url === '/script.js') {
    res.setHeader('Content-Type', 'text/javascript');
    res.write(javascript);
    res.end()
  } else if (req.url === '/style.css') {
    res.setHeader('Content-Type', 'text/css');
    res.write(css);
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(html); // Send a response back to the client
    res.end(); // End the response
  }
});

server.listen(3000); // The server listens on port 3000