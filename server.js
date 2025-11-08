
// file system to be able to read/write to files
const fs = require('node:fs');


// Express handles server for HTTP req, middleware, views, and templates.
const express = require('express');
const app = express();



// port to link page
const PORT = 3000;

// Create server routes


app.get('/', (req, res) => {
    readSite('index.html', res)
})

// about page
app.get('/about', (req, res) => {
    readSite('about.html', res)
})

// contact page
app.get('/contact', (req, res) => {
    readSite('contact.html', res)
})

// Fallback
app.use((req, res) => {
    readSite('404.html', res)
})

 

// Have the server listen for requests
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
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
