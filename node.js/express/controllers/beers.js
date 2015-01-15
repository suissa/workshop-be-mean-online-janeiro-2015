var Model = require('./../models/beer');


module.exports = {
  create: function(req, res) {
    var dados = req.body
    , model = new Model(dados);

    console.log('POST: ', dados);

    model.save(function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        console.log('Sucesso: ', data);
        res.json(data);
      }
    });
  },
  retrieve: function(req, res) {
    var query = {};

    Model.find(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        console.log('Sucesso: ', data);
        res.json(data);
      }
    });
  },
  findOne: function(req, res) {
    var query = {_id: req.params.id};

    Model.findOne(query, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        console.log('Sucesso: ', data);
        res.json(data);
      }
    });
  },
  update: function(req, res) {
    // req.params contém as variáveis que vc setou na rota
    var query = {_id: req.params.id};
    console.log('query: ', query);

    var mod = req.body;

    var optional = {
      upsert: false,
      multi: true
    };

    Model.update(query, mod, function (err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        console.log('Sucesso: ', data);
        res.json(data);
      }
    });

  },
  delete: function(req, res) {
    var query = {};

    Model.remove(query, function(err, data) {
      if (err){
        console.log('Erro: ', err);
        res.json(err);
      }
      else{
        console.log('Sucesso: ', data);
        res.json(data);
      }
    });
  }
};