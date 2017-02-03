// src/data/types/UserType.js
/* eslint */

import {GraphQLObjectType} from "graphql";
import {attributeFields} from "graphql-sequelize";

import {default as UserModel} from "../models/User";

const UserType = new GraphQLObjectType({
	name: "User",
	fields: attributeFields(UserModel)
});

export default UserType;
