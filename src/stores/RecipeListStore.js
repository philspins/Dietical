// src/stores/RecipeListStore.js
/* eslint */

import toastr from "toastr";
import alt from "../utils/Dispatcher";
import RecipeListActions from "../actions/RecipeListActions";

class RecipeListStore {
	constructor() {
		this.bindActions(RecipeListActions);

		this.recipes = [];
	}

	onGetRecipesSuccess(data) {
		this.recipes = data;
	}

	onGetRecipesFail(jqXhr) {
		toastr.error(jqXhr.responseJSON.message);
	}
}

export default alt.createStore(RecipeListStore);
