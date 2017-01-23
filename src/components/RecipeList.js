// src/components/RecipeList.js
/*eslint no-console:0 */

import React from "react";
import {Link} from "react-router";
import {isEqual} from "underscore";

import RecipeListStore from "../stores/RecipeListStore";
import RecipeListActions from "../actions/RecipeListActions";

class RecipeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = RecipeListStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		RecipeListStore.listen(this.onChange);
		RecipeListActions.getRecipes(this.props.params);
	}

	componentWillUnmount() {
		RecipeListStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
		RecipeListActions.getRecipes(this.props.params);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let recipeList = "";

		return (
      <div className='container'>
        <div className='list-group'>
					<div key={1} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{1}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/recipes/" + 1}>
									<img className='media-object' src='http://images.media-allrecipes.com/userphotos/560x315/1126199.jpg' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/recipes/" + 1}>Best Pork Chop Marinade</Link>
								</h4>
							</div>
						</div>
					</div>
					<div key={2} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{2}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/recipes/" + 2}>
									<img className='media-object' src='http://images.media-allrecipes.com/userphotos/560x315/1010419.jpg' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/recipes/" + 2}>Best Parmesan Chicken Bake</Link>
								</h4>
							</div>
						</div>
					</div>
					<div key={3} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{3}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/recipes/" + 3}>
									<img className='media-object' src='http://images.media-allrecipes.com/userphotos/250x250/129405.jpg' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/recipes/" + 3}>Homemade Mac and Cheese</Link>
								</h4>
							</div>
						</div>
					</div>
        </div>
      </div>
		);
	}
}

export default RecipeList;
