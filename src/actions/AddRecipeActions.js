// src/actions/AddRecipeActions.js
/* eslint */

import alt from "../utils/Dispatcher";

class AddRecipeActions {
	constructor() {
		this.generateActions(
      "addRecipeSuccess",
      "addRecipeFail",
      "updateName"
    );
	}

	addRecipe() {

	}
}

export default alt.createActions(AddRecipeActions);
