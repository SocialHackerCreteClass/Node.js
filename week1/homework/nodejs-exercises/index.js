const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
    console.log(req.url);
    
    if (req.url==='/'){
        fs.readFile('index.html',(err,content)=>{
            if(err)throw err;
        res.setHeader('Content-Type', 'text/html');
        res.write('Hello World!'); //send a response back to the client
        res.end(content,'utf8');
    })
    }else if (req.url==='/style.css'){
        fs.readFile('./subFolder/style.css',(err,content)=>{
            if(err)throw err;
        res.setHeader('Content-Type', 'text/css');
        res.write(''); //send a response back to the client
        res.end(content);
            })
        }   
    else if(req.url==='/script.js'){
        fs.readFile('./subFolder/script.js',(err,content)=>{
            if(err)throw err;
        res.setHeader('Content-Type', 'text/javascript');
        res.write(''); 
         res.end(content);
            })
        }   
});

server.listen(3000,()=>console.log("server running..")); 
//the server listens on port 3000