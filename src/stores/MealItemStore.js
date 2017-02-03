// src/stores/MealItemStore.js
/* eslint */

import toastr from "toastr";

import alt from "../utils/Dispatcher";
import MealItemActions from "../actions/MealItemActions";

class MealItemStore {
	constructor() {
		this.bindActions(MealItemActions);

	}
}

export default alt.createStore(MealItemStore);
