// Create a web server
// Load the comments.json file
// Return the comments as JSON

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {

  if (req.url === '/favicon.ico') {
    res.writeHead(200, {'Content-Type': 'image/x-icon'});
    res.end();
    return;
  }

  if (req.url === '/comments.json') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    fs.readFile('comments.json', function(err, data) {
      res.end(data);
    });
    return;
  }

  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('404 not found');

});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
