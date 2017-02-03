// src/data/types/MealTypeType.js
/* eslint */

import {GraphQLObjectType} from "graphql";
import {attributeFields} from "graphql-sequelize";

import MealType from "../models/MealType";

const MealTypeType = new GraphQLObjectType({
	name: "MealType",
	fields: attributeFields(MealType)
});

export default MealTypeType;
