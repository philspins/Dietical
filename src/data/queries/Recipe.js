// src/data/queries/Recipe.js
/* eslint */

import {GraphQLID} from "graphql";
import {resolver} from "graphql-sequelize";
import RecipeType from "../types/RecipeType";
import {default as RecipeModel} from "../models/Recipe";

const Recipe = {
	type: RecipeType,
	args: {id: {type: GraphQLID}},
	resolve: resolver(RecipeModel)
};

export default Recipe;
