// src/data/models/index.js
/*eslint no-console:0 */

var sequelize = require("../sequelize");
var User = require("./User");
var Recipe = require("./Recipe");
var Ingredient = require("./Ingredient");
var FoodItem = require("./FoodItem");
var MealItem = require("./MealItem");
var MealType = require("./MealType");
var Meal = require("./Meal");
var TagDef = require("./TagDef");
var Tag = require("./Tag");


//
// Recipe and FoodItem relations
// -----------------------------------------------------------------------------
Recipe.FoodItems = Recipe.belongsToMany(FoodItem, {
	through: Ingredient,
	as: "FoodItems"
});
FoodItem.Recipes = FoodItem.belongsToMany(Recipe, {
	through: Ingredient,
	as: "Recipes"
});


//
// Meals relationships with Recipe and FoodItem
// -----------------------------------------------------------------------------
Meal.belongsToMany(Recipe, {
	through: MealItem,
	foreignKey: "ItemID",
	constraints: false,
	scope: {
		ItemType: "Recipe"
	}
});
Recipe.belongsToMany(Meal, {
	through: MealItem,
	foreignKey: "ItemID",
	constraints: false,
	as: "Recipe"
});
Meal.belongsToMany(FoodItem, {
	through: MealItem,
	foreignKey: "ItemID",
	constraints: false,
	scope: {
		ItemType: "FoodItem"
	}
});
FoodItem.belongsToMany(Meal, {
	through: MealItem,
	foreignKey: "ItemID",
	constraints: false,
	as: "FoodItem"
});


//
// Other Meal relationships
// -----------------------------------------------------------------------------
Meal.hasMany(MealItem);
User.hasMany(Meal);
MealType.hasMany(Meal);


//
// Tag relationships
// -----------------------------------------------------------------------------
TagDef.belongsToMany(Recipe, {
	through: Tag,
	foreignKey: "TaggableID",
	constraints: false,
	scope: {
		Taggable: "Recipe"
	}
});
Recipe.belongsToMany(TagDef, {
	through: Tag,
	foreignKey: "TaggableID",
	constraints: false,
	as: "Recipe"
});
TagDef.belongsToMany(FoodItem, {
	through: Tag,
	foreignKey: "TaggableID",
	constraints: false,
	scope: {
		Taggable: "FoodItem"
	}
});
FoodItem.belongsToMany(TagDef, {
	through: Tag,
	foreignKey: "TaggableID",
	constraints: false,
	as: "FoodItem"
});


//
// Define sequelize functions to export
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

function transaction(...args) {
	return sequelize.transaction(...args);
}

module.exports = {
	sync, query, get, transaction,
	User,
	Recipe,
	Ingredient,
	FoodItem,
	MealItem,
	MealType,
	Meal,
	TagDef,
	Tag };