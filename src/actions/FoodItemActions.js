// src/actions/FoodItemActions.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
import $ from "jquery";

class FoodItemActions {
	constructor() {
		this.generateActions(
			"getFoodItemSuccess",
      "getFoodItemFail"
    );
	}

	getFoodItem(FoodItemId) {
		$.ajax({ url: "/api/food/" + FoodItemId })
      .done((data) => {
	this.actions.getFoodItemSuccess(data);
})
      .fail((jqXhr) => {
	this.actions.getFoodItemFail(jqXhr);
});
	}
}

export default alt.createActions(FoodItemActions);
