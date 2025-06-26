// app.js
//console.log('Hello, World!');
const http = require('http'); // Import the built-in http module

const hostname = '0.0.0.0'; // Important: Listen on all network interfaces
const port = 3000;          // The port your app will listen on

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP status code 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello, World from Node.js Docker App!\n'); // Send a response
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
