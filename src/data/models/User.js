// src/data/models/User.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

var UserClaim = require("./UserClaim");
var UserLogin = require("./UserLogin");
var UserProfile = require("./UserProfile");

const User = Model.define("User",
	{
		id: {
			type: DataType.UUID,
			defaultValue: DataType.UUIDV1,
			primaryKey: true
		},
		email: {
			type: DataType.STRING(255),
			validate: { isEmail: true }
		},
		emailConfirmed: {
			type: DataType.BOOLEAN,
			defaultValue: false
		}
	},
	{
		indexes: [{ fields: ["email"] }]
	}
);

User.hasMany(UserLogin);
User.hasMany(UserClaim);
User.hasOne(UserProfile);

module.exports = User;
