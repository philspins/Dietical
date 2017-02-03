// src/data/models/MealType.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const MealType = Model.define("MealType",
	{
		Name: { type: DataType.STRING(100) }
	}
);

export default MealType;
