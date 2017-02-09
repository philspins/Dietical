// src/data/queries/Meal.js
/* eslint */

import {GraphQLList} from "graphql";
import {resolver} from "graphql-sequelize";

import {Meal, FoodItem, Recipe} from "../models";
import MealType from "../types/MealType";

const Meals = {
	type: new GraphQLList(MealType),
	resolve: resolver(Meal)
};

export default Meals;
