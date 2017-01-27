// src/data/queries/FoodItem.js
/*eslint no-console:0 */

var FoodType = require("../types/FoodType");
var resolver = require("graphql-sequelize").resolver;
var FoodModel = require("../models/FoodItem");

const FoodItem = {
	type: FoodType,
	resolve: resolver(FoodModel)
};

module.exports = FoodItem;
