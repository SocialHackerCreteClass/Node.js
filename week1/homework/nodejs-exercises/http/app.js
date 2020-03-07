const http = require('http')
const fs = require('fs')

let server = http.createServer(function (req, res) {
  if (req.url === '/script.js') {
    res.writeHead(200, { 'Content-Type': 'text/javascript' })
    res.write(`document.getElementById('content').appendChild(document.createTextNode('Welcome to Server-land!'))`)
    res.end()
  } else if (req.url === '/style.css') {
    const style = fs.readFileSync('./style.css', 'utf8')
    res.writeHead(200, {'Content-Type': 'text/css'})
    res.write(style)
    res.end()
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`
      <html>
        <head>
          <title>My First Web Server</title>
          <link rel="stylesheet" type="text/css" href="style.css" />
        </head>
        <body>
          <h1>Hello, anyone there?</h1>
          <div id="content"></div>
          <script src="script.js"></script>
        </body>
      </html>
    `)
    res.end()
  }
});

server.listen(3000)
