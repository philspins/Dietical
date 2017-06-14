// src/actions/MealPlannerActions.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";
import MealPlannerSource from "../sources/MealPlannerSource";

class MealPlannerActions {
	constructor() {
		this.generateActions(
			"getMealsSuccess",
			"getMealsFail"
    );
	}

	getMeals() {
		return (dispatch) => {
			dispatch();
			MealPlannerSource.fetch()
				.then((data) => {
					toastr.info(JSON.stringify(data));
					this.getMealsSuccess(data);
				})
				.catch((error) => {
					this.getMealsFail(error);
				});
		};
	}

	setMealDay(data) {
		return data;
	}
}

export default alt.createActions(MealPlannerActions);
