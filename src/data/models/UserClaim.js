// src/data/models/UserClaim.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const UserClaim = Model.define("UserClaim",
	{
		type: { type: DataType.STRING },
		value: { type: DataType.STRING }
	}
);

module.exports = UserClaim;
