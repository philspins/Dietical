// src/data/types/MealType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLUnionType,
				GraphQLList,
				GraphQLNonNull,
				GraphQLID,
				GraphQLString} from "graphql";
import DateType from "graphql-date";
import {resolver} from "graphql-sequelize";

import MealTypeType from "./MealTypeType";
import UserType from "./UserType";
import MealItemType from "./MealItemType";
import RecipeType from "./RecipeType";
import FoodType from "./FoodType";
import {Meal} from "../models";


const MealType = new GraphQLObjectType({
	name: "Meal",
	fields: {
		id: { type: new GraphQLNonNull(GraphQLID) },
		Day: { type: DateType },
		User: {
			type: UserType,
			resolve: resolver(Meal.User)
		},
		MealType: {
			type: MealTypeType,
			resolve: resolver(Meal.MealType)
		},
		Recipes: {
			type: new GraphQLList(RecipeType),
			resolve: resolver(Meal.Recipes)
		},
		FoodItems: {
			type: new GraphQLList(FoodType),
			resolve: resolver(Meal.FoodItems)
		}
	},
	resolve: resolver(Meal)
});

export default MealType;
