// src/data/models/Meal.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const Meal = Model.define("Meal",
	{
		Day: { type: DataType.DATE }
	}
);

module.exports = Meal;
