// src/data/types/MealTypeType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var attributeFields = require("graphql-sequelize").attributeFields;

var MealTypeModel = require("../models/MealType");
var sequelize = require("../sequelize");

var ObjectType = graphql.GraphQLObjectType;

const MealTypeType = new ObjectType({
	name: "MealType",
	fields: attributeFields(MealTypeModel)
});

module.exports = MealTypeType;
