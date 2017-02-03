// src/stores/FoodListStore.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";
import FoodListActions from "../actions/FoodListActions";

class FoodListStore {
	constructor() {
		this.bindActions(FoodListActions);

		this.food = [];
	}

	onGetFoodItemsSuccess(data) {
		this.food = data;
	}

	onGetFoodItemsFail(jqXhr) {
		toastr.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(FoodListStore);
