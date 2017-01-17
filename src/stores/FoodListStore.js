// src/stores/FoodListStore.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
import FoodListActions from "../actions/FoodListActions";

class FoodListStore {
	constructor() {
		this.bindActions(FoodListActions);
	}
}

export default alt.createStore(FoodListStore);
