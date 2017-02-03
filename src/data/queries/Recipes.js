// src/data/queries/Recipes.js
/* eslint */

import {GraphQLList} from "graphql";
import {resolver} from "graphql-sequelize";

import RecipeType from "../types/RecipeType";
import {default as RecipeModel} from "../models/Recipe";

const Recipes = {
	type: new GraphQLList(RecipeType),
	resolve: resolver(RecipeModel)
};

export default Recipes;
