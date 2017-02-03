// src/stores/MealPlannerStore.js
/* eslint */

import toastr from "toastr";

import alt from "../utils/Dispatcher";
import MealPlannerActions from "../actions/MealPlannerActions";

class MealPlannerStore {
	constructor() {
		this.bindActions(MealPlannerActions);

		this.mealDay = new Date();
		this.meals = [];
		this.carbs = 12.6;
		this.fibre = 5.2;
		this.fat = 153.3;
		this.protein = 140.3;
	}

	onSetMealDay(data){
		this.mealDay = data;
	}
}

export default alt.createStore(MealPlannerStore);
