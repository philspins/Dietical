// src/components/AddRecipe.js
/* eslint */

import React from "react";
import {FormGroup,
        FormControl,
				ControlLabel,
				Button,
				HelpBlock,
				Grid,
				Row,
				Col} from "react-bootstrap";

import AddRecipeStore from "../stores/AddRecipeStore";
import AddRecipeActions from "../actions/AddRecipeActions";

class AddRecipe extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddRecipeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddRecipeStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddRecipeStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		var name = this.state.name.trim();
		var cuisine = this.state.cuisine;
		var mainIngredient = this.state.mainIngredient;
		var mealType = this.state.mealType;

		if (!name) {
			AddRecipeActions.invalidName();
			this.refs.nameTextField.getDOMNode().focus();
		}

		if (!cuisine) {
			AddRecipeActions.invalidCuisine();
			this.refs.cuisineDropdownField.getDOMNode().focus();
		}

		if (!mainIngredient) {
			AddRecipeActions.invalidMainIngredient();
			this.refs.mainIngredientDropdownField.getDOMNode().focus();
		}

		if (!mealType) {
			AddRecipeActions.invalidMealType();
			this.refs.mealTypeDropdownField.getDOMNode().focus();
		}

		if (name && cuisine && mainIngredient && mealType) {
			AddRecipeActions.addRecipe(name, cuisine, mainIngredient, mealType);
		}
	}

	render() {
		return (
			<form>
				<Grid>
					<Row flipInX animated>
						<Col sm={8}>
							<FormGroup
								controlId="nameTextField"
								validationState={this.state.nameValidationState}
							>
								<ControlLabel>Recipe Name</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddRecipeActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>

							<FormGroup
								controlId="cousineDropdownField"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Cuisine</ControlLabel>
								<FormControl
									componentClass="select"
									placeholder="Select"
									value={this.state.cuisine}
									onChange={AddRecipeActions.updateCuisine}
								>
									<option value="">...</option>
									<option value="american">American</option>
									<option value="mexican">Mexican</option>
									<option value="italian">Italian</option>
									<option value="french">French</option>
								</FormControl>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>

							<FormGroup
								controlId="mainIngredientDropdownField"
								validationState={this.state.mainIngredientValidationState}
							>
								<ControlLabel>Main Ingredient</ControlLabel>
								<FormControl
									componentClass="select"
									placeholder="Select"
									value={this.state.mainIngredient}
									onChange={AddRecipeActions.updateMainIngredient}
								>
									<option value="">...</option>
									<option value="chicken">Chicken</option>
									<option value="pork">Pork</option>
									<option value="beef">Beef</option>
									<option value="seafood">Seafood</option>
								</FormControl>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>

							<FormGroup
								controlId="mealTypeDropdownField"
								validationState={this.state.mealTypeValidationState}
							>
								<ControlLabel>Meal Type</ControlLabel>
								<FormControl
									componentClass="select"
									placeholder="select"
									type="text"
									value={this.state.mealType}
									onChange={AddRecipeActions.updateMealType}
								>
									<option value="">...</option>
									<option value="breakfast">Breakfast</option>
									<option value="lunch">Lunch</option>
									<option value="dinner">Dinner</option>
									<option value="snack">Snack</option>
								</FormControl>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>


							<Button type='submit'>Submit</Button>
						</Col>
					</Row>
				</Grid>

			</form>
		);
	}
}

export default AddRecipe;
