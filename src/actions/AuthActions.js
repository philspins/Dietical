// src/actions/AuthActions.js
/* eslint */

import AppDispatcher from "../dispatcher/AppDispatcher";
import alt from "../utils/Dispatcher";
import AuthConstants from "../constants/AuthConstants";

export default {

	logUserIn: (profile, token) => {
		alt.dispatch({
			actionType: AuthConstants.LOGIN_USER,
			profile: profile,
			token: token
		});
	},

	logUserOut: () => {
		alt.dispatch({
			actionType: AuthConstants.LOGOUT_USER
		});
	}

};
