// src/data/models/User.js
/* eslint */

import DataType from "sequelize";
import Model from "../sequelize";

import UserClaim from "./UserClaim";
import UserLogin from "./UserLogin";
import UserProfile from "./UserProfile";

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

export default User;
