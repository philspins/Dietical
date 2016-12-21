// src/actions/RecipeActions.js
/*eslint no-console:0 */

import alt from '../utils/Dispatcher';
import $ from 'jquery';

class RecipeActions {
	constructor() {
    this.generateActions(
			'getRecipeSuccess',
      'getRecipeFail'
    );
  }

	getRecipe(recipeId) {
		$.ajax({ url: '/api/recipes/' + recipeId })
      .done((data) => {
        this.actions.getRecipeSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getRecipeFail(jqXhr);
    });
  }
}

export default alt.createActions(RecipeActions);
