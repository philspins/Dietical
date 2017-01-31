// src/data/queries/FoodItem.js
/*eslint no-console:0 */

var graphql = require("graphql");
var FoodType = require("../types/FoodType");
var resolver = require("graphql-sequelize").resolver;
var FoodModel = require("../models/FoodItem");
var ID = graphql.GraphQLID;

const FoodItem = {
	type: FoodType,
	args: {id: {type: ID}},
	resolve: resolver(FoodModel)
};

module.exports = FoodItem;
