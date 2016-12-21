// src/actions/RecipeListActions.js
/*eslint no-console:0 */

import alt from '../utils/Dispatcher';
import $ from 'jquery';

class RecipeListActions {
	constructor() {
    this.generateActions(
      'getRecipesSuccess',
      'getRecipesFail'

    );
  }

	getRecipes(payload) {
    let url = '/api/recipes/top';
    let params = {
      cuisine: payload.cuisine,
      mainIngredient: payload.mainIngredient,
			mealType: payload.mealType
    };

    $.ajax({ url: url, data: params })
      .done((data) => {
        this.actions.getRecipesSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getRecipesFail(jqXhr);
      });
  }
}

export default alt.createActions(RecipeListActions);
