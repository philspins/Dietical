// src/data/models/TagDef.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const TagDef = Model.define("TagDef",
	{
		Tag: { type: DataType.STRING(100) }
	},
	{
		indexes: [{ unique: true, fields: ["Tag"] }]
	}
);

module.exports = TagDef;
