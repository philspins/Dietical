// src/data/types/FoodType.js
/* eslint */

import {GraphQLObjectType} from "graphql";
import {attributeFields} from "graphql-sequelize";
import {resolver} from "graphql-sequelize";

import {default as FoodModel} from "../models/FoodItem";


const FoodType = new GraphQLObjectType({
	name: "FoodItem",
	fields: attributeFields(FoodModel)
});

export default FoodType;
