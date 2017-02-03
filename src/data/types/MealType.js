// src/data/types/MealType.js
/* eslint */

import {GraphQLObjectType,
				GraphQLNonNull,
				GraphQLID} from "graphql";
import DateType from "graphql-date";

import MealTypeType from "./MealTypeType";
import UserType from "./UserType";

const MealType = new GraphQLObjectType({
	name: "Meal",
	fields: {
		id: { type: new GraphQLNonNull(GraphQLID) },
		Day: { type: DateType },
		User: { type: UserType },
		Type: { type: MealTypeType }
	}
});

export default MealType;
