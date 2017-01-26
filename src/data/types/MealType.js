// src/data/types/MealType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var DateType = require("graphql-date");

var MealTypeType = require("./MealTypeType");
var UserType = require("./UserType");

var ObjectType = graphql.GraphQLObjectType;
var ID = graphql.GraphQLID;
var NonNull = graphql.GraphQLNonNull;

const MealType = new ObjectType({
	name: "Meal",
	fields: {
		id: { type: new NonNull(ID) },
		Day: { type: DateType },
		User: { type: UserType },
		Type: { type: MealTypeType }
	}
});

module.exports = MealType;
