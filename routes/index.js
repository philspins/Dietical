const routes = require('express').Router();
var Recipe = require('../models/recipe');
var Ingredient = require('../models/ingredient');


/* GET home page. */
routes.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});
routes.get('/other', function(req, res) {
  res.render('other', { title: 'Other' });
});


module.exports = routes;
