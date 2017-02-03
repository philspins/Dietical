// src/data/queries/MealType.js
/* eslint */

import MealTypeType from "../types/MealTypeType";
import {resolver} from "graphql-sequelize";
import {default as MealTypeModel} from "../models/MealType";

const MealType = {
	type: MealTypeType,
	resolve: resolver(MealTypeModel)
};

export default MealType;
