// src/data/queries/MealItems.js
/* eslint */

import {GraphQLList} from "graphql";
import {resolver} from "graphql-sequelize";

import MealItemType from "../types/MealItemType";
import {MealItem as MealItemModel} from "../models";

const MealItems = {
	type: new GraphQLList(MealItemType),
	resolve: resolver(MealItemModel)
};

export default MealItems;
