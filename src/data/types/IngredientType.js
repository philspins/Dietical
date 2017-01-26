// src/data/types/IngredientType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var ObjectType = graphql.GraphQLObjectType;
var ID = graphql.GraphQLID;

const IngredientType = new ObjectType({
	name: "Ingredient",
	fields: {
		FoodItemId: { type: ID },
		RecipeId: { type: ID }
	}
});

module.exports = IngredientType;
