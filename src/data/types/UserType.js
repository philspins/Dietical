// src/data/types/UserType.js
/*eslint no-console:0 */

var graphql = require("graphql");
var ObjectType = graphql.GraphQLObjectType;
var ID = graphql.GraphQLID;
var StringType = graphql.GraphQLString;
var NonNull = graphql.GraphQLNonNull;

const UserType = new ObjectType({
	name: "User",
	fields: {
		id: { type: new NonNull(ID) },
		email: { type: StringType }
	}
});

module.exports = UserType;
