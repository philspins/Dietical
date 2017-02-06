// src/data/queries/Meal.js
/* eslint */

import {GraphQLList} from "graphql";
import {resolver} from "graphql-sequelize";

import {Meal as mealModel} from "../models";
import MealType from "../types/MealType";

const Meal = {
	type: new GraphQLList(MealType),
	resolve: resolver(mealModel)
};

export default Meal;
