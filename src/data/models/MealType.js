// src/data/models/MealType.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const MealType = Model.define("MealType",
	{
		Name: { type: DataType.STRING(100) }
	}
);

module.exports = MealType;
