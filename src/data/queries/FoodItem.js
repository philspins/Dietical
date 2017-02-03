// src/data/queries/FoodItem.js
/* eslint */

import {GraphQLID} from "graphql";
import FoodType from "../types/FoodType";
import {resolver} from "graphql-sequelize";
import {default as FoodModel} from "../models/FoodItem";

const FoodItem = {
	type: FoodType,
	args: {id: {type: GraphQLID}},
	resolve: resolver(FoodModel)
};

export default FoodItem;
