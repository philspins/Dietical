// src/actions/MealPlannerActions.js
/* eslint */

import toastr from "toastr";

import alt from "../utils/Dispatcher";

class MealPlannerActions {
	constructor() {
		this.generateActions(
			"loadMealsSuccess",
			"loadMealsFail"
    );
	}

	loadMeals() {
		return true;
	}

	setMealDay(data) {
		//toastr.error(date);
		return data;
	}
}

export default alt.createActions(MealPlannerActions);
