// src/actions/FoodListActions.js
/* eslint */

import alt from "../utils/Dispatcher";
import FoodListSource from "../sources/FoodListSource";

class FoodListActions {
	constructor() {
		this.generateActions(
			"getFoodItemsSuccess",
			"getFoodItemsFail"
		);
	}

	getFoodItems() {
		return (dispatch) => {
			dispatch();
			FoodListSource.fetch()
				.then((data) => {
					this.getFoodItemsSuccess(data);
				})
				.catch((error) => {
					this.getFoodItemsFail(error);
				});
		};
	}
}

export default alt.createActions(FoodListActions);
