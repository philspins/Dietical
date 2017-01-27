// src/data/models/Ingredient.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const Ingredient = Model.define("Ingredient");

module.exports = Ingredient;
