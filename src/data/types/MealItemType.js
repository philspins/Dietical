// src/data/types/MealItemType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLUnionType,
				GraphQLList,
				GraphQLID,
				GraphQLString,
				GraphQLInt} from "graphql";
import {resolver, attributeFields} from "graphql-sequelize";

import {Meal, MealItem as MealItemModel} from "../models";
import FoodType from "./FoodType";
import RecipeType from "./RecipeType";

const MealItemType = new GraphQLObjectType({
	name: "MealItem",
	fields: {
		Recipes: {
			type: new GraphQLList(RecipeType),
			resolve: resolver(Meal.Recipes)
		},
		FoodItems: {
			type: new GraphQLList(FoodType),
			resolve: resolver(Meal.FoodItems)
		}
	}
});

export default MealItemType;
