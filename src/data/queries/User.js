// src/data/queries/User.js
/* eslint */

import {resolver} from "graphql-sequelize";

import UserType from "../types/UserType";
import {default as UserModel} from "../models/User";

const User = {
	type: UserType,
	resolve: resolver(UserModel)
};

export default User;
