var express = require('express');
var router = express.Router();
var Controller = require('./../../controllers/beers')



// CREATE
router.post('/', function(req, res) {
  Controller.create(req, res);
});

// RETRIEVE
router.get('/', function(req, res) {
  Controller.retrieve(req, res);
});

module.exports = router;

/*
Em uma API Rest para o CRUD iremos utilizar 4 verbos do HTTP que são:

- Create = POST
- Retrieve = GET
- Update = PUT
- Delete = delete
*/