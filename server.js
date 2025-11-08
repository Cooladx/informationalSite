#!/usr/bin/node
const { createServer } = require('node:http');
const fs = require('node:fs');

const { URL } = require('url'); 

// hostname and port to link page
const hostname = '127.0.0.1';
const port = 8080;

// Create server
const server = createServer((req, res) => {
  
    const url = req.url
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
  
    if (url === "/") {
    readSite('index.html', res)
    }

    else if (url === "/about") {
    readSite('about.html', res)
    }

     else if (url === "/contact") {
    readSite('contact.html', res);
    }

    else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      readSite('404.html', res);
    }
    
})

// Have the server listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





// Reading files of other htmls files to serve
const readSite = (filename, res) => {

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    else {
    console.log(data);
    }
    res.end(data)
  });
  
}


