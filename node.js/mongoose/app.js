var http = require('http')
  , Controller = require('./controllers/beers')
  ;



http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});

  console.log('url: ', req.url);
  var url = req.url;

  switch(url) {
    case '/beers/create':
      Controller.create(req, res);
      break;
    case '/beers/retrieve':
      Controller.retrieve(req, res);
      break;
    case '/beers/update':
      Controller.update(req, res);
      break;
    case '/beers/delete':
      Controller.delete(req, res);
      break;
  }

}).listen(3000);
console.log('Server running at http://localhost:3000/');




