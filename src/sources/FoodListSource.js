// src/sources/FoodListSource.js
/* eslint */


var FoodListSource = {
	fetch: function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{FoodItems { id, Name, Quantity, Weight, Calories, " +
									"Protein, Fat, Carbs, Fibre, ImageURL }}"
				}).then(function (response) {
					return response.data.data.FoodItems;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default FoodListSource;
