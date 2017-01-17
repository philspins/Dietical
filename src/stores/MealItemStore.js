// src/stores/MealItemStore.js
/*eslint no-console:0 */

import toastr from "toastr";

import alt from "../utils/Dispatcher";
import MealItemActions from "../actions/MealItemActions";

class MealItemStore {
	constructor() {
		this.bindActions(MealItemActions);

	}
}

export default alt.createStore(MealItemStore);
