// src/sources/RecipeSource.js
/* eslint */


var FoodItemSource = {
	fetch: function(id) {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{Recipe(id:" + id + "){id,Name,Instructions,ImageURL,Ingredients" +
									"{id,Name,Quantity,Weight, Fat,Carbs,Fibre,ImageURL}}}"
				}).then(function (response) {
					return response.data.data.Recipe;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default FoodItemSource;
