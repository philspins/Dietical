// src/data/models/Tag.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const Tag = Model.define("Tag",
	{
		Taggable: { type: DataType.STRING(100) },
		TaggableID: { type: DataType.STRING(100) }
	}
);

module.exports = Tag;
