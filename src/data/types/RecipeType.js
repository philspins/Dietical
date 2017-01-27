// src/data/types/RecipeType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var resolver = require("graphql-sequelize").resolver;
var ObjectType = graphql.GraphQLObjectType;
var ListType = graphql.GraphQLList;
var ID = graphql.GraphQLID;
var StringType = graphql.GraphQLString;
var NonNull = graphql.GraphQLNonNull;

var Recipe = require("../models").Recipe;
var FoodType = require("./FoodType");

const RecipeType = new ObjectType({
	name: "Recipe",
	fields: {
		id: { type: new NonNull(ID) },
		Name: { type: StringType },
		Instructions: { type: StringType },
		ImageURL: { type: StringType },
		Ingredients: {
			type: new ListType(FoodType),
			resolve: resolver(Recipe.FoodItems) }
	}
});

module.exports = RecipeType;
