// src/data/models/UserLogin.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const UserLogin = Model.define("UserLogin",
	{
		name: { type: DataType.STRING(50), primaryKey: true },
		key: { type: DataType.STRING(100), primaryKey: true }
	}
);

module.exports = UserLogin;
