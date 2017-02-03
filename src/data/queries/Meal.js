// src/data/queries/Meal.js
/* eslint */

import MealType from "../types/MealType";
import {resolver} from "graphql-sequelize";
import {default as MealModel} from "../models/Meal";

const Meal = {
	type: MealType,
	resolve: resolver(MealModel)
};

export default Meal;
