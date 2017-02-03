// src/actions/AddFoodActions.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";

class AddFoodActions {
	constructor() {
		this.generateActions(
      "addFoodSuccess",
      "addFoodFail",
      "updateName",
      "updateCuisine",
      "updateMainIngredient",
      "updateMealType",
      "invalidName",
      "invalidCuisine",
      "invalidMainIngredient",
      "invalidMealType"
    );
	}

	addFood() {
		toastr.error("Adding a food.");
		/*
		$.ajax({
			type: "POST",
			url: "/api/Foods",
			data: {
				name: name,
				cuisine: cuisine,
				mainIngredient: mainIngredient,
				mealType: mealType
			}
		})
    .done((data) => {
			this.actions.addFoodSuccess(data.message);
		})
    .fail((jqXhr) => {
			this.actions.addFoodFail(jqXhr.responseJSON.message);
		});
		*/
	}
}

export default alt.createActions(AddFoodActions);
