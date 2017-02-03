// src/stores/FoodItemStore.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";
import FoodItemActions from "../actions/FoodItemActions";

class FoodItemStore {
	constructor() {
		this.bindActions(FoodItemActions);

		this.id = "";
		this.name = "";
		this.quantity = "";
		this.weight = "";
		this.calories = "";
		this.protein = "";
		this.carbs = "";
		this.fat = "";
		this.fibre = "";
		this.imageURL = "";
	}

	onGetFoodItemSuccess(data) {
		this.id = data.id;
		this.name = data.Name;
		this.quantity = data.Quantity;
		this.weight = data.Weight;
		this.calories = data.Calories;
		this.protein = data.Protein;
		this.carbs = data.Carbs;
		this.fat = data.Fat;
		this.fibre = data.Fibre;
		this.imageURL = data.ImageURL;
	}

	onGetFoodItemFail(jqXhr) {
		toastr.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(FoodItemStore);
