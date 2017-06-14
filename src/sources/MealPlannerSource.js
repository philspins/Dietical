// src/sources/MealPlannerSource.js
/* eslint */


var MealPlannerSource = {
	fetch: function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(axios.post("/graphql", {
					query: 	"{Meals{Day,User{id,login},MealType{id,Name}," +
									"Recipes{id,Name},FoodItems{id,Name}}}"
				}).then(function (response) {
					return response.data.data.Meals;
				}).catch(function (error) {
					return error;
				}));
			}, 250);
		});
	}
};

export default MealPlannerSource;
