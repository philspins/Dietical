// src/data/models/MealItem.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const MealItem = Model.define("MealItem",
	{
		ItemType: { type: DataType.STRING(100) },
		ItemID: { type: DataType.STRING(100) },
		Quantity: { type: DataType.DOUBLE }
	}
);

export default MealItem;
