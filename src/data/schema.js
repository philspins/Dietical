// src/data/schema.js
/* eslint */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType} from "graphql";

import User from "./queries/User";
import Meal from "./queries/Meal";
import Meals from "./queries/Meals";
import MealType from "./queries/MealType";
import FoodItem from "./queries/FoodItem";
import FoodItems from "./queries/FoodItems";
import Recipe from "./queries/Recipe";
import Recipes from "./queries/Recipes";

const schema = new Schema({
	query: new ObjectType({
		name: "Root",
		fields: {
			User,
			Meal,
			Meals,
			MealType,
			FoodItem,
			FoodItems,
			Recipe,
			Recipes
		}
	})
});

module.exports = schema;
