// src/data/queries/FoodItem.js
/* eslint */

import {GraphQLID} from "graphql";
import FoodType from "../types/FoodType";

const FoodItem = {
	type: FoodType,
	args: {id: {type: GraphQLID}}
};

export default FoodItem;
