// src/data/types/MealType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLUnionType,
				GraphQLList,
				GraphQLNonNull,
				GraphQLID,
				GraphQLString} from "graphql";
import DateType from "graphql-date";
import {resolver, attributeFields} from "graphql-sequelize";
import toastr from "toastr";

import MealTypeType from "./MealTypeType";
import UserType from "./UserType";
import MealItemType from "./MealItemType";
//import FoodType from "./FoodType";
//import RecipeType from "./RecipeType";
import {Meal} from "../models";

/*
function resolveMealItemType(value){
	if(value.ItemType == "Recipe"){return RecipeType;}else{return FoodType;}
}

const MealItemType = new GraphQLUnionType({
	name: "MealItem",
	types: [RecipeType, FoodType],
	resolveType: resolveMealItemType
});
*/

const MealType = new GraphQLObjectType({
	name: "Meal",
	fields: {
		id: { type: new GraphQLNonNull(GraphQLID) },
		Day: { type: DateType },
		UserId: { type: GraphQLID },
		MealTypeId: { type: GraphQLID },
		MealItems: {
			type: new GraphQLList(MealItemType),
			resolve: resolver(Meal.MealItems)
		}
	}
});

export default MealType;
