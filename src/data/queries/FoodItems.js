// src/data/queries/FoodItems.js
/* eslint */

import {GraphQLList} from "graphql";
import {resolver} from "graphql-sequelize";

import FoodType from "../types/FoodType";
import {default as FoodModel} from "../models/FoodItem";

const FoodItems = {
	type: new GraphQLList(FoodType)
};

export default FoodItems;
