// src/Routes.js
/*eslint no-console:0 */

import React from "react";
import {Router, Route, browserHistory} from "react-router";

import App from "./components/App";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import Recipe from "./components/Recipe";
import AddRecipe from "./components/AddRecipe";
import FoodList from "./components/FoodList";
import FoodItem from "./components/FoodItem";
import AddFood from "./components/AddFood";
import MealPlanner from "./components/MealPlanner";

export default (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			<Route path='/planner' component={MealPlanner} />
			<Route path='/recipes' component={RecipeList} />
			<Route path='/recipes/add' component={AddRecipe} />
			<Route path='/recipes/:id' component={Recipe} />
			<Route path='/food' component={FoodList} />
			<Route path='/food/add' component={AddFood} />
			<Route path='/food/:id' component={FoodItem} />
		</Route>
	</Router>
);



/*export default (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			<Route path='/planner' component={MealPlanner} />
			<Route path='/recipes' component={RecipeList} />
			<Route path='/recipes/add' component={AddRecipe} />
			<Route path='/recipes/:id' component={Recipe} />
			<Route path='/food' component={FoodList} />
			<Route path='/food/add' component={AddFood} />
			<Route path='/food/:id' component={FoodItem} />
		</Route>
	</Router>
);
*/
