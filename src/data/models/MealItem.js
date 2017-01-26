// src/data/models/MealItem.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const MealItem = Model.define("MealItem",
	{
		ItemType: { type: DataType.STRING(100) },
		ItemID: { type: DataType.STRING(100) }
	}
);

module.exports = MealItem;
