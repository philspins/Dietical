// src/data/queries/Food.js
/*eslint no-console:0 */

var FoodType = require("../types/FoodType");
var resolver = require("graphql-sequelize").resolver;
var FoodModel = require("../models/FoodItem");

const Food = {
	type: FoodType,
	resolve: resolver(FoodModel)
};

module.exports = Food;
