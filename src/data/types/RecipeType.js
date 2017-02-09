// src/data/types/RecipeType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLList,
				GraphQLNonNull,
				GraphQLInt,
				GraphQLString} from "graphql";
import {resolver} from "graphql-sequelize";

import {Recipe} from "../models";
import FoodType from "./FoodType";

const RecipeType = new GraphQLObjectType({
	name: "Recipe",
	fields: {
		id: { type: new GraphQLNonNull(GraphQLInt) },
		Name: { type: GraphQLString },
		Instructions: { type: GraphQLString },
		ImageURL: { type: GraphQLString },
		Ingredients: {
			type: new GraphQLList(FoodType),
			resolve: resolver(Recipe.FoodItems) }
	}
});

export default RecipeType;
