// src/actions/FoodListActions.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
//import $ from "jquery";

class FoodListActions {
	constructor() {
		this.generateActions(
      "getFoodItemsSuccess",
      "getFoodItemsFail"
    );
	}

	getFoodItems(payload) {
		let url = "/api/food/top";
		let params = {
			cuisine: payload.cuisine,
			mainIngredient: payload.mainIngredient,
			mealType: payload.mealType
		};

		/*
		$.ajax({ url: url, data: params })
    .done((data) => {
			this.actions.getFoodItemsSuccess(data);
		})
		.fail((jqXhr) => {
			this.actions.getFoodItemsFail(jqXhr);
		});
		*/
	}
}

export default alt.createActions(FoodListActions);
