// src/data/models/Meal.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const Meal = Model.define("Meal",
	{
		Day: { type: DataType.DATE }
	}
);

export default Meal;
