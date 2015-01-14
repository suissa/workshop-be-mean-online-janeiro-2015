var http = require('http')
  , Beer = require('./models/beer')
  ;


var Controller = {
  create: function(req, res) {
    var dados = { name: 'Skol'
      , description: 'Mijo de rato'
      , alcohol: 4.5
      , price: 3.0
      , category: 'pilsen'
    }
    , model = new Beer(dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.end('Erro: ' + err);
      }
      else{
        console.log('Sucesso: ', data);
        res.end('Sucesso: ' + data);
      }
    });
  },
  retrieve: function(req, res) {
    var query = {};

    Beer.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.end('Erro: ' + err);
      }
      else{
        console.log('Sucesso: ', data);
        res.end('Sucesso: ' + data);
      }
    });
  },
  update: function(req, res) {
    var query = {name: /skol/i};

    var mod = {
      name: 'Brahma',
      alcohol: 4,
      price: 6,
      category: 'pilsen'
    };

    var optional = {
      upsert: false,
      multi: false
    };

    Beer.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
      }
      else{
        console.log('Cervejas atualizadas com sucesso: ', data);
      }
      process.exit(0);
    });

  },
  delete: function(req, res) {
    var query = {};

    Beer.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.end('Erro: ' + err);
      }
      else{
        console.log('Sucesso: ', data);
        res.end('Sucesso: ' + data);
      }
    });
  }
};

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




