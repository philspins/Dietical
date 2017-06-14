// src/data/queries/DayPlan.js
/* eslint */

import {GraphQLList, GraphQLID} from "graphql";
import {resolver} from "graphql-sequelize";
import DateType from "graphql-date";

import {Meal, FoodItem, Recipe} from "../models";
import MealType from "../types/MealType";

const DayPlan = {
	type: new GraphQLList(MealType),
	args: {
		day: {type: DateType},
		UserId: {type: GraphQLID}
	},
	resolve: resolver(Meal)
};

export default DayPlan;
