// src/stores/RecipeStore.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";
import RecipeActions from "../actions/RecipeActions";

class RecipeStore {
	constructor() {
		this.bindActions(RecipeActions);

		this.id = "";
		this.name = "";
		this.instructions = "";
		this.imageURL = "";
		this.ingredients = [];
	}

	onGetRecipeSuccess(data) {
		this.id = data.id;
		this.name = data.Name;
		this.instructions = data.Instructions;
		this.imageURL = data.ImageURL;
		this.ingredients = data.Ingredients;
	}

	onGetRecipeFail(jqXhr) {
		toastr.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(RecipeStore);
