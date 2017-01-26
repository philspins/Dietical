// src/data/sequelize.js
/*eslint no-console:0 */

var Sequelize = require("sequelize");

const sequelize = new Sequelize("nourish", "nourish", "Nourish!123", {
	host: "localhost",
	dialect: "mysql",
	logging: false,

	define: {
		timestamps: false
	},

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;
