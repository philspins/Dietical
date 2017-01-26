// src/data/queries/Meal.js
/*eslint no-console:0 */

var MealType = require("../types/MealType");
var resolver = require("graphql-sequelize").resolver;
var MealModel = require("../models/Meal");

const Meal = {
	type: MealType,
	resolve: resolver(MealModel)
};

module.exports = Meal;
