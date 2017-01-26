// src/data/queries/Ingredients.js
/*eslint no-console:0 */

var IngredientType = require("../types/RecipeType");
var resolver = require("graphql-sequelize").resolver;

var RecipeModel = require("../models");
var sequelize = require("../sequelize");

const Ingredient = {
	type: IngredientType,
	resolve: resolver(RecipeModel.Ingredients)
};

module.exports = Ingredient;
