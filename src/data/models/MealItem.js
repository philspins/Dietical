// src/data/models/MealItem.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const MealItem = Model.define("MealItem",
	{
		id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
		ItemType: { type: DataType.STRING(100) },
		ItemID: { type: DataType.STRING(100) },
		Quantity: { type: DataType.DOUBLE }
	},
	{
		instanceMethods: {
			getItem: function() {
				return this["get" + this.get("ItemType").substr(0,1).toUpperCase() + this.get("ItemType").substr(1)]();
			}
		}
	}
);



export default MealItem;
