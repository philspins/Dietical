// src/data/models/TagDef.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

const TagDef = Model.define("TagDef",
	{
		Tag: { type: DataType.STRING(100) }
	},
	{
		indexes: [{ unique: true, fields: ["Tag"] }]
	}
);

export default TagDef;
