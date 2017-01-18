// src/components/Recipe.js
/*eslint no-console:0 */

import React from "react";
import {FormGroup,
        FormControl,
				ControlLabel,
				Button,
				HelpBlock,
				Grid,
				Row,
				Col,
				Thumbnail} from "react-bootstrap";

import RecipeStore from "../stores/RecipeStore";
import RecipeActions from "../actions/RecipeActions";


class Recipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = RecipeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		RecipeStore.listen(this.onChange);
		RecipeActions.getRecipe(this.props.params.id);
	}

	componentWillUnmount() {
		RecipeStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
      <Grid>
				<Row>
					<Col sm={8}>
						<div className='recipe-img'>
							<Thumbnail src="/images/placeholder.png" />
						</div>
						<div className='recipe-info clearfix'>
							<h2><strong>{this.state.name}</strong></h2>
							<h4 className='lead'>Cuisine: <strong>{this.state.cuisine}</strong></h4>
							<h4 className='lead'>Main Ingredient: <strong>{this.state.mainIngredient}</strong></h4>
							<h4 className='lead'>Meal Type: <strong>{this.state.mealType}</strong></h4>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Recipe;
