// src/actions/RecipeActions.js
/* eslint */

import alt from "../utils/Dispatcher";
import RecipeSource from "../sources/RecipeSource";

class RecipeActions {
	constructor() {
		this.generateActions(
			"getRecipeSuccess",
      "getRecipeFail"
    );
	}

	getRecipe(id) {
		return (dispatch) => {
			dispatch();
			RecipeSource.fetch(id)
				.then((data) => {
					this.getRecipeSuccess(data);
				})
				.catch((error) => {
					this.getRecipeFail(error);
				});
		};
	}
}

export default alt.createActions(RecipeActions);
