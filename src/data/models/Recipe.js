// src/data/models/Recipe.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const Recipe = Model.define("Recipe",
	{
		Name: { type: DataType.STRING(100) },
		Instructions: { type: DataType.TEXT },
		ImageURL: { type: DataType.TEXT }
	}
);

export default Recipe;
