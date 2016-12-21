// src/actions/AddRecipeActions.js
/*eslint no-console:0 */

import $ from 'jquery';
import alt from '../utils/Dispatcher';

class AddRecipeActions {
  constructor() {
    this.generateActions(
      'addRecipeSuccess',
      'addRecipeFail',
      'updateName',
      'updateCuisine',
      'updateMainIngredient',
      'updateMealType',
      'invalidName',
      'invalidCuisine',
      'invalidMainIngredient',
      'invalidMealType'
    );
  }

  addRecipe(name, cuisine, mainIngredient, mealType) {
    $.ajax({
      type: 'POST',
      url: '/api/recipes',
      data: {
				name: name,
				cuisine: cuisine,
				mainIngredient: mainIngredient,
				mealType: mealType
			}
    })
      .done((data) => {
        this.actions.addRecipeSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addRecipeFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddRecipeActions);
