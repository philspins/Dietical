// src/data/models/Recipe.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const Recipe = Model.define("Recipe",
	{
		Name: { type: DataType.STRING(100) },
		Instructions: { type: DataType.TEXT },
		ImageURL: { type: DataType.TEXT }
	}
);

module.exports = Recipe;
