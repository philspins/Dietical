// src/data/types/FoodType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var attributeFields = require("graphql-sequelize").attributeFields;

var FoodModel = require("../models/FoodItem");
var ObjectType = graphql.GraphQLObjectType;


const FoodType = new ObjectType({
	name: "FoodItem",
	fields: attributeFields(FoodModel)
});

module.exports = FoodType;
