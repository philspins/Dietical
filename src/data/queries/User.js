// src/data/queries/User.js
/*eslint no-console:0 */

var UserType = require("../types/UserType");

const User = {
	type: UserType,
	resolve({ request }) {
		return request.user && {
			Id: request.user.pkUserId,
			Name: request.user.FirstName & " " & request.user.LastName,
			Email: request.user.Email
		};
	}
};

module.exports = User;
