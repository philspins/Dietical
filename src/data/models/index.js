// src/data/models/index.js
/*eslint no-console:0 */

var sequelize = require("../sequelize");
var User = require("./User");
var UserClaim = require("./UserClaim");
var UserLogin = require("./UserLogin");
var UserProfile = require("./UserProfile");
/*
User.hasMany(UserLogin, {
	foreignKey: "userId",
	as: "logins",
	onUpdate: "cascade",
	onDelete: "cascade"
});

User.hasMany(UserClaim, {
	foreignKey: "userId",
	as: "claims",
	onUpdate: "cascade",
	onDelete: "cascade"
});

User.hasOne(UserProfile, {
	foreignKey: "userId",
	as: "profile",
	onUpdate: "cascade",
	onDelete: "cascade"
});
*/
function sync(...args) {
	return sequelize.sync(...args);
}

module.exports = { sync, User };
