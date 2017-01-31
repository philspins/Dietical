// src/sources/FoodListSource.js
/*eslint no-console:0 */


import toastr from "toastr";

var FoodListSource = {
	fetch: function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: "{FoodItems{id,Name,ImageURL}}"
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
