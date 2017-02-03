// src/actions/MealItemActions.js
/* eslint */

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
