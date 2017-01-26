// src/data/models/FoodItem.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const FoodItem = Model.define("FoodItem",
	{
		Name: { type: DataType.STRING(100) },
		Quantity: { type: DataType.STRING(32) },
		Weight: { type: DataType.INTEGER },
		Calories: { type: DataType.INTEGER },
		Protein: { type: DataType.DOUBLE },
		Carbs: { type: DataType.DOUBLE },
		Fat: { type: DataType.DOUBLE },
		Fibre: { type: DataType.DOUBLE },
		ImageURL: { type: DataType.TEXT }
	}
);


module.exports = FoodItem;
