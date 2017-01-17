// src/stores/FoodItemStore.js
/*eslint no-console:0 */

import alt from "../utils/Dispatcher";
import FoodItemActions from "../actions/FoodItemActions";

class FoodItemStore {
	constructor() {
		this.bindActions(FoodItemActions);

		this.name = "";
		this.uom = "";
		this.weight = "";
		this.calories = "";
		this.protein = "";
		this.carbs = "";
		this.fat = "";
		this.fibre = "";
	}
}

export default alt.createStore(FoodItemStore);
