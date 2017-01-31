// src/actions/FoodItemActions.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
import FoodItemSource from "../sources/FoodItemSource";

class FoodItemActions {
	constructor() {
		this.generateActions(
			"getFoodItemSuccess",
      "getFoodItemFail"
    );
	}

	getFoodItem(id) {
		return (dispatch) => {
			dispatch();
			FoodItemSource.fetch(id)
				.then((data) => {
					this.getFoodItemSuccess(data);
				})
				.catch((error) => {
					this.getFoodItemFail(error);
				});
		};
	}
}

export default alt.createActions(FoodItemActions);
