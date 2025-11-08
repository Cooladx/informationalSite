
// pulling http to create server
const { createServer } = require('node:http');

// file system to be able to read/write to files
const fs = require('node:fs');



// hostname and port to link page
const hostname = '127.0.0.1';
const port = 8080;

// Create server
const server = createServer((req, res) => {
  
    // Gets the URL after the hostname and ensures status code 200 on user going to initital url
    const url = req.url
    res.statusCode = 200;
    // Set the header to html so user can see initial page
    res.setHeader('Content-Type', 'text/html');
  
    // Root URL
    if (url === "/") {
    readSite('index.html', res)
    }

    // URL for about page
    else if (url === "/about") {
    readSite('about.html', res)
    }

    // URL for contact page
     else if (url === "/contact") {
    readSite('contact.html', res);
    }


    // In the case user types incorrect URL, pop up the error page and send a 404.
    else {
      res.statusCode = 404;
      readSite('404.html', res);
    }
    
})

// Have the server listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





// Function to read file of an html file to serve
const readSite = (filename, res) => {
  // Read in a file of html and return error. Otherwise, return the data and end the link.
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.end(data)
  });
}


