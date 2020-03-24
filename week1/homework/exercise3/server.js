`use strict`

var http = require('http');

const htmlText = "<!DOCTYPE html><html><head> <meta charset='UTF-8'><title>My First Web Server</title>" + 
  "<link rel='stylesheet' type='text/css' href='style.css' /></head><body>" +
  "<h1>Hello, anyone there?</h1><div id='content'></div><script src='script.js'></script>" +
  "</body></html>";

  const javascriptText = "document" +
                        ".getElementById('content')" +
                        ".appendChild(document.createTextNode('Welcome to Server-land!'));";

const cssText = "#content { color: blue }";

//create a server
let server = http.createServer((req, res) => {
    if ( req.url === '/script.js' ) { /* send javascript */ 
        res.setHeader('Content-Type', 'text/javascript');
        res.write(javascriptText); //send a response back to the client
        res.end(); //end the response
    } else if(req.url === '/style.css' ) { /* send CSS */ 
        res.setHeader('Content-Type', 'text/css');
        res.write(cssText); //send a response back to the client
        res.end(); //end the response
    } else { /* send HTML */ 
        res.setHeader('Content-Type', 'text/html');
        res.write(htmlText); //send a response back to the client
        res.end(); //end the response
    }
});

server.listen(3000); //the server listens on port 3000
