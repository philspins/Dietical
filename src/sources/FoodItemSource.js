// src/sources/FoodItemSource.js
/*eslint no-console:0 */


import toastr from "toastr";

var FoodItemSource = {
	fetch: function(foodId) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{FoodItem(id:" + foodId + ") { id, Name, Quantity, " +
									"Calories, Protein, Fat, Carbs, Fibre, ImageURL }}"
				}).then(function (response) {
					return response.data.data.FoodItem;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default FoodItemSource;
