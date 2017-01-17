// src/actions/MealItemActions.js
/*eslint no-console:0 */

import toastr from "toastr";

import alt from "../utils/Dispatcher";

class MealItemActions {
	constructor() {
		this.generateActions(
			"loadMealSuccess",
			"loadMealFail"
    );
	}

	loadMeal() {
		return true;
	}
}

export default alt.createActions(MealItemActions);
