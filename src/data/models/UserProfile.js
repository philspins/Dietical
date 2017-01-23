// src/data/models/UserProfile.js
/*eslint no-console:0 */

var DataType = require("sequelize");
var Model = require("../sequelize");

const UserProfile = Model.define("UserProfile", {
	userId: {
		type: DataType.UUID,
		primaryKey: true
	},

	displayName: {
		type: DataType.STRING(100)
	},

	picture: {
		type: DataType.STRING(255)
	},

	gender: {
		type: DataType.STRING(50)
	},

	location: {
		type: DataType.STRING(100)
	}
});


module.exports = UserProfile;
