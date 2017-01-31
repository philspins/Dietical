// src/stores/FoodListStore.js
/*eslint no-console:0 */

import toastr from "toastr";

import alt from "../utils/Dispatcher";
import FoodListActions from "../actions/FoodListActions";

class FoodListStore {
	constructor() {
		this.bindActions(FoodListActions);

		this.food = [];
	}

	onGetFoodItemsSuccess(data) {
		toastr.info("onGetFoodItemsSuccess");
		this.food = data;
		toastr.info(JSON.stringify(this.food));
	}

	onGetFoodItemsFail(jqXhr) {
		toastr.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(FoodListStore);
