const http = require('http');

const server = http.createServer((req, res) => {
  // Set response header
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Check the requested URL
  if (req.url === '/') {
    // Parent route
    res.end(`
      <html>
        <head><title>Home</title></head>
        <body>
          <h1>Welcome to the Parent Route</h1>
        </body>
      </html>
    `);
  } else {
    // Any other route
    res.end(`
      <html>
        <head><title>404</title></head>
        <body>
          <h1>404 - Page Not Found</h1>
        </body>
      </html>
    `);
  }
});

// Start server on port 3000
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
