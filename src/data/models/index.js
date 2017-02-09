// src/data/models/index.js
/* eslint */

import sequelize from "../sequelize";
import User from "./User";
import Recipe from "./Recipe";
import Ingredient from "./Ingredient";
import FoodItem from "./FoodItem";
import MealItem from "./MealItem";
import MealType from "./MealType";
import Meal from "./Meal";
import TagDef from "./TagDef";
import Tag from "./Tag";


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
Meal.Recipes = Meal.belongsToMany(Recipe, {
	through: {
		model: MealItem,
		unique: false
	}
});
Recipe.Meals = Recipe.belongsToMany(Meal, {
	through: {
		model: MealItem,
		unique: false,
		scope: {
			ItemType: "Recipe"
		}
	},
	foreignKey: "ItemID",
	constraints: false
});
Meal.FoodItems = Meal.belongsToMany(FoodItem, {
	through: {
		model: MealItem,
		unique: false
	}
});
FoodItem.Meals = FoodItem.belongsToMany(Meal, {
	through: {
		model: MealItem,
		unique: false,
		scope: {
			ItemType: "FoodItem"
		}
	},
	foreignKey: "ItemID",
	constraints: false
});


//
// Other Meal relationships
// -----------------------------------------------------------------------------
Meal.MealItems = Meal.hasMany(MealItem, {foreignKey: {allowNull: false}, onDelete: "CASCADE"});
Meal.User = Meal.belongsTo(User, {foreignKey: {allowNull: false}, onDelete: "CASCADE"});
Meal.MealType = Meal.belongsTo(MealType, {foreignKey: {allowNull: false}, onDelete: "CASCADE"});


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
