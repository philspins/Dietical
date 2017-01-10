// src/stores/FooterStore.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
import FooterActions from "../actions/FooterActions";

class FooterStore {
	constructor() {
		this.bindActions(FooterActions);
	}
}

export default alt.createStore(FooterStore);
