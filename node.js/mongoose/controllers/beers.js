var Model = require('./../models/beer');


module.exports = {
  create: function(req, res) {
    var dados = { name: 'Skol'
      , description: 'Mijo de rato'
      , alcohol: 4.5
      , price: 3.0
      , category: 'pilsen'
    }
    , model = new Model(dados);

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

    Model.find(query, function (err, data) {
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
      multi: true
    };

    Model.update(query, mod, optional, function (err, data) {
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
  delete: function(req, res) {
    var query = {};

    Model.remove(query, function(err, data) {
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