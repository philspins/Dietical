// src/data/models/Tag.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const Tag = Model.define("Tag",
	{
		Taggable: { type: DataType.STRING(100) },
		TaggableID: { type: DataType.STRING(100) }
	}
);

export default Tag;
