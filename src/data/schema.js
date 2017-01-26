// src/data/schema.js
/*eslint no-console:0 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType} from "graphql";

import User from "./queries/User";
import Meal from "./queries/Meal";
import MealType from "./queries/MealType";
import Food from "./queries/Food";
import Recipe from "./queries/Recipe";

const schema = new Schema({
	query: new ObjectType({
		name: "Root",
		fields: {
			User,
			Meal,
			MealType,
			Food,
			Recipe
		}
	})
});

module.exports = schema;
