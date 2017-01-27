// src/data/queries/Recipes.js
/*eslint no-console:0 */

var graphql = require("graphql");
var resolver = require("graphql-sequelize").resolver;

var RecipeType = require("../types/RecipeType");
var RecipeModel = require("../models/Recipe");
var ListType = graphql.GraphQLList;

const Recipes = {
	type: new ListType(RecipeType),
	resolve: resolver(RecipeModel)
};

module.exports = Recipes;
