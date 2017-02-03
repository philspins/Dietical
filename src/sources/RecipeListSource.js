// src/sources/RecipeListSource.js
/* eslint */


var RecipeListSource = {
	fetch: function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{Recipes { id, Name, Instructions, ImageURL, Ingredients { " +
									"id, Name, Quantity, Weight, Fat, Carbs, Fibre, ImageURL }}}"
				}).then(function (response) {
					return response.data.data.Recipes;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default RecipeListSource;
