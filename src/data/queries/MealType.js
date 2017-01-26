// src/data/queries/MealType.js
/*eslint no-console:0 */

var MealTypeType = require("../types/MealTypeType");
var resolver = require("graphql-sequelize").resolver;
var MealTypeModel = require("../models/MealType");

const MealType = {
	type: MealTypeType,
	resolve: resolver(MealTypeModel)
};

module.exports = MealType;
