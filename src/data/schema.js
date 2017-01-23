// src/data/schema.js
/*eslint no-console:0 */

var {GraphQLSchema,
		GraphQLObjectType} = require("graphql");

var user = require("./queries/user");

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "user",
		fields: {
			user
		}
	})
});

module.exports = schema;
