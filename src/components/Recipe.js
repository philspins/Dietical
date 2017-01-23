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
		if (prevProps.params.id !== this.props.params.id) {
			RecipeActions.getRecipe(this.props.params.id);
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
							<Thumbnail src="/images/placeholder.png" />
						</div>
						<div className='recipe-info clearfix'>
							<h2><strong>{this.state.name}</strong></h2>
							<h5>Ingredients:</h5>
							<h5>Instructions:</h5>
							<h6 className='lead'>Tags: <strong>{this.state.cuisine}</strong></h6>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Recipe;
