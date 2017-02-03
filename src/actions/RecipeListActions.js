// src/actions/RecipeListActions.js
/* eslint */

import alt from "../utils/Dispatcher";
import RecipeListSource from "../sources/RecipeListSource";

class RecipeListActions {
	constructor() {
		this.generateActions(
      "getRecipesSuccess",
      "getRecipesFail"
    );
	}

	getRecipes() {
		return (dispatch) => {
			dispatch();
			RecipeListSource.fetch()
				.then((data) => {
					this.getRecipesSuccess(data);
				})
				.catch((error) => {
					this.getRecipesFail(error);
				});
		};
	}
}

export default alt.createActions(RecipeListActions);
