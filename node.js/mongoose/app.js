var http = require("http");


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/workshop-online-janeiro-2015');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err)
});
db.on('open', function () {
  console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});

var Schema = mongoose.Schema;

var BeerSchema = new Schema({ name: { type: String, default: '' }
  , description: { type: String, default: '' }
  , alcohol: { type: Number, min: 0}
  , category: { type: String, default: ''}
  , created_at: { type: Date, default: Date.now }
  });

var Beer = mongoose.model('Beer', BeerSchema);




http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/plain"});

  console.log('url: ', req.url);
  var url = req.url;

  switch(url) {
    case '/beers/create':
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
      break;
    case '/beers/retrieve':
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
      break;
    case '/beers/update':
      var query = {}
        , mod = { name: 'Brahma'
          , alcohol: 4
          , price: 6
          , category: 'pilsen'
        };

      Beer.update(query, mod, function (err, data) {
        if (err){
          console.log('Erro: ', err);
          res.end('Erro: ' + err);
        }
        else{
          console.log('Sucesso: ', data);
          res.end('Sucesso: ' + data);
        }
      });

      break;
    case '/beers/delete':
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

      break;
  }

}).listen(3000);
console.log('Server running at http://localhost:3000/');




