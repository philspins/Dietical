// src/components/Recipe.js
/*eslint no-console:0 */

import React from "react";
import $ from "jquery";
import magnific from "magnific-popup";
import {FormGroup,
        FormControl,
				ControlLabel,
				Button,
				HelpBlock,
				Grid,
				Row,
				Col} from "react-bootstrap";

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

		$(".magnific-popup").magnificPopup({
			type: "image",
			mainClass: "mfp-zoom-in",
			closeOnContentClick: true,
			midClick: true,
			zoom: {
				enabled: true,
				duration: 300
			}
		});
	}

	componentWillUnmount() {
		RecipeStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
    // Fetch new charachter data when URL path changes
		if (prevProps.params.id !== this.props.params.id) {
      //CharacterActions.getCharacter(this.props.params.id);
		}
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
							<a className='magnific-popup' href={"https://somepath/" + this.state.recipeId + ".jpg"}>
								<img src={"https://somepath/" + this.state.recipeId + ".jpg"} />
							</a>
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
