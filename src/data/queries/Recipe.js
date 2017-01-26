// src/data/queries/Recipe.js
/*eslint no-console:0 */

var RecipeType = require("../types/RecipeType");
var resolver = require("graphql-sequelize").resolver;
var RecipeModel = require("../models/Recipe");

const Recipe = {
	type: RecipeType,
	resolve: resolver(RecipeModel)
};

module.exports = Recipe;
