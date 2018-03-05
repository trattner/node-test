var http = require('http');
var url = require('url');

//create a server object:
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.name + " " + q.email;
  console.log(txt);
  res.end(txt);
}).listen(8080); //the server object listens on port 8080
