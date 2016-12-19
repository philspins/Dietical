import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe'

export default (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path='/' component={Home} />
			<Route path='/recipes/add' component={AddRecipe} />
			<Route path='/recipes/:id' component={Recipe} />
			<Route path='/recipes' component={RecipeList} />
			<Route path=':cuisine' component={RecipeList}>
	      <Route path=':mainIngredient' component={RecipeList}>
	        <Route path=':mealType' component={RecipeList} />
	      </Route>
	    </Route>
		</Route>
	</Router>
);
