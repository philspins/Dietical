// src/stores/HomeStore.js
/*eslint no-console:0 */

import alt from '../utils/Dispatcher';
import HomeActions from '../actions/HomeActions';

class HomeStore {
	constructor() {
		this.bindActions(HomeActions);
	}
}

export default alt.createStore(HomeStore);
