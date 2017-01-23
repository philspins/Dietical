// src/data/models/User.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const User = Model.define("User",
	{
		pkUserId: {
			type: DataType.UUID,
			primaryKey: true
		},

		FirstName: {
			type: DataType.STRING(100)
		},

		LastName: {
			type: DataType.STRING(100)
		},

		Email: {
			type: DataType.STRING(100)
		}
	},
	{
		freezeTableName: true,
		tableName: "tblUsers",
		indexes: [
			{ fields: ["pkUserId"] }
		]
	}
);

module.exports = User;
