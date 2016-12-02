/*
 * Ingredient Routing
 * Defines routing for Mongoose Ingredient class.
 */

var Ingredient = require("../models/ingredient");

/*
 * GET ingredient listing.
 */
exports.list = function(req, res) {
  Ingredient.find({}, function(err, ingredients) {
    res.json(200, ingredients);
  });
};

/*
 * GET a particular ingredient.
 */ 
exports.show = function(req, res) {
  Ingredient.find({_id: req.params.id}, function(err, ingredients) {
    if(err) res.json(404, { status: 404, message: "Ingredient not found." });
    res.json(200, ingredients[0]);
  });
};

/*
 * Create a new ingredient.
 */
exports.create = function(req, res) {
  var json = JSON.parse(req.body.ingredient),
      ingredient = new Ingredient(json);

  ingredient.save(function(err) {
    if(err) req.json(500, { status: 500, message: "Could not save ingredient." });
    res.json(200, { status: 200, message: "Ingredient successfully saved.", ingredient: ingredient });
  });
};

/*
 * Updates an existing ingredient.
 */
exports.update = function(req, res) {
  var json = req.body;
  delete json._id;

  Ingredient.update({_id: req.params.id}, json, { multi: true }, function(err, numAffected) {
    if(err || numAffected === 0) res.json(500, { status: 500, message: "Could not update ingredient. No ingredient with that ID exists." });
    res.json(200, { status: 200, message: "Ingredient successfully updated." });
  });
};