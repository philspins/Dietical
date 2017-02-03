// src/stores/AddFoodStore.js
/* eslint */

import alt from "../utils/Dispatcher";
import AddFoodActions from "../actions/AddFoodActions";

class AddFoodStore {
	constructor() {
		this.bindActions(AddFoodActions);
		this.name = "";
		this.cuisine = "";
		this.mainIngredient = "";
		this.mealType = "";
		this.helpBlock = "";
		this.nameValidationState = "";
		this.cuisineValidationState = "";
		this.mainIngredientValidationState = "";
		this.mealTypeValidationState = "";
	}

	onAddFoodSuccess(successMessage) {
		this.nameValidationState = "success";
		this.cuisineValidationState = "success";
		this.mainIngredientValidationState = "success";
		this.mealTypeValidationState = "success";
		this.helpBlock = successMessage;
	}

	onAddFoodFail(errorMessage) {
		this.nameValidationState = "error";
		this.cuisineValidationState = "error";
		this.mainIngredientValidationState = "error";
		this.mealTypeValidationState = "error";
		this.helpBlock = errorMessage;
	}

	onUpdateName(event) {
		this.name = event.target.value;
		this.nameValidationState = "";
		this.helpBlock = "";
	}

	onUpdateCuisine(event) {
		this.cuisine = event.target.value;
		this.cuisineValidationState = "";
		this.helpBlock = "";
	}

	onUpdateMainIngredient(event) {
		this.mainIngredient = event.target.value;
		this.mainIngredientValidationState = "";
		this.helpBlock = "";
	}

	onUpdateMealType(event) {
		this.mealType = event.target.value;
		this.mealTypeValidationState = "";
		this.helpBlock = "";
	}

	onInvalidName() {
		this.nameValidationState = "error";
		this.helpBlock = "Please enter a Food name.";
	}

	onInvalidCuisine() {
		this.nameValidationState = "error";
		this.helpBlock = "Please select a cuisine.";
	}

	onInvalidMainIngredient() {
		this.nameValidationState = "error";
		this.helpBlock = "Please select a main ingredient.";
	}

	onInvalidMealType() {
		this.nameValidationState = "error";
		this.helpBlock = "Please select a meal type.";
	}
}

export default alt.createStore(AddFoodStore);
