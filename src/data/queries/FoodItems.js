// src/data/queries/FoodItems.js
/*eslint no-console:0 */

var graphql = require("graphql");
var resolver = require("graphql-sequelize").resolver;

var FoodType = require("../types/FoodType");
var FoodModel = require("../models/FoodItem");
var ListType = graphql.GraphQLList;

const FoodItems = {
	type: new ListType(FoodType),
	resolve: resolver(FoodModel)
};

module.exports = FoodItems;
