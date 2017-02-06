// src/data/types/MealItemType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLUnionType,
				GraphQLNonNull,
				GraphQLID,
				GraphQLString,
				GraphQLInt} from "graphql";
import {resolver, attributeFields} from "graphql-sequelize";

import {MealItem as MealItemModel} from "../models";

const MealItemType = new GraphQLObjectType({
	name: "MealItem",
	fields: attributeFields(MealItemModel),
	resolve: resolver(MealItemModel)
});

export default MealItemType;
