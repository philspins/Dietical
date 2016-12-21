// src/actions/HomeActions.js
/*eslint no-console:0 */

import alt from '../utils/Dispatcher';

class HomeActions {
	constructor() {
		this.generateActions(
			'action'
    );
	}
}

export default alt.createActions(HomeActions);
