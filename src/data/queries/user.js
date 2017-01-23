// src/data/queries/user.js
/*eslint no-console:0 */

var UserType = require("../types/UserType");

const user = {
	type: UserType,
	resolve({ request }) {
		return request.user && {
			id: request.user.pkUserId,
			name: request.user.FirstName & " " & request.user.LastName,
			email: request.user.Email
		};
	}
};

module.exports = user;
