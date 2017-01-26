// src/data/models/index.js
/*eslint no-console:0 */

var sequelize = require("../sequelize");
var User = require("./User");
var Recipe = require("./Recipe");
var FoodItem = require("./FoodItem");
var MealItem = require("./MealItem");
var MealType = require("./MealType");
var Meal = require("./Meal");
var TagDef = require("./TagDef");
var Tag = require("./Tag");


// Define relations
// -----------------------------------------------------------------------------
MealItem.hasMany(Recipe, {
	foreignKey: "ItemID",
	constraints: false,
	scope: {
		ItemType: "Recipe"
	}
});
Recipe.belongsTo(MealItem, {
	foreignKey: "ItemID",
	constraints: false,
	as: "Recipe"
});
FoodItem.hasMany(MealItem, {
	foreignKey: "ItemID",
	constraints: false,
	scope: {
		ItemType: "FoodItem"
	}
});
MealItem.belongsTo(FoodItem, {
	foreignKey: "ItemID",
	constraints: false,
	as: "FoodItem"
});

Meal.hasMany(MealItem);
User.hasMany(Meal);
Recipe.Ingredients = FoodItem.belongsToMany(Recipe, {through: "Ingredients"});

Recipe.hasMany(Tag, {
	foreignKey: "TaggableID",
	constraints: false,
	scope: {
		Taggable: "Recipe"
	}
});
Tag.belongsTo(Recipe, {
	foreignKey: "TaggableID",
	constraints: false,
	as: "Recipe"
});
FoodItem.hasMany(Tag, {
	foreignKey: "TaggableID",
	constraints: false,
	scope: {
		Taggable: "FoodItem"
	}
});
Tag.belongsTo(FoodItem, {
	foreignKey: "TaggableID",
	constraints: false,
	as: "FoodItem"
});

TagDef.hasMany(Tag);
MealType.hasMany(Meal);

// -----------------------------------------------------------------------------

function sync(...args) {
	return sequelize.sync(...args);
}

function query(...args) {
	return sequelize.query(...args);
}

function get(...args) {
	return sequelize.get(...args);
}

module.exports = { sync, query, get, User, Recipe, FoodItem, Tag };
