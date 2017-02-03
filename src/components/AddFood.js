// src/components/AddFood.js
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

import AddFoodStore from "../stores/AddFoodStore";
import AddFoodActions from "../actions/AddFoodActions";

class AddFood extends React.Component {
	constructor(props) {
		super(props);
		this.state = AddFoodStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddFoodStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddFoodStore.unlisten(this.onChange);
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
			AddFoodActions.invalidName();
			this.refs.nameTextField.getDOMNode().focus();
		}

		if (!cuisine) {
			AddFoodActions.invalidCuisine();
			this.refs.cuisineDropdownField.getDOMNode().focus();
		}

		if (!mainIngredient) {
			AddFoodActions.invalidMainIngredient();
			this.refs.mainIngredientDropdownField.getDOMNode().focus();
		}

		if (!mealType) {
			AddFoodActions.invalidMealType();
			this.refs.mealTypeDropdownField.getDOMNode().focus();
		}

		if (name && cuisine && mainIngredient && mealType) {
			AddFoodActions.addFood(name, cuisine, mainIngredient, mealType);
		}
	}

	render() {
		return (
			<form>
				<Grid>
					<Row>
						<Col md={4}>
							<FormGroup
								controlId="txtName"
								validationState={this.state.nameValidationState}
							>
								<ControlLabel>Food Name</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup
								controlId="txtProtein"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Protein (g)</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<FormGroup
								controlId="txtUOM"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Unit of Measure</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup
								controlId="txtCarbs"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Carbohydrates (g)</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<FormGroup
								controlId="txtWeight"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Weight</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup
								controlId="txtFat"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Fat (g)</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<FormGroup
								controlId="txtCalories"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Calories</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup
								controlId="txtFibre"
								validationState={this.state.cousineValidationState}
							>
								<ControlLabel>Fibre (g)</ControlLabel>
								<FormControl
									type="text"
									value={this.state.name}
									placeholder="Enter text"
									onChange={AddFoodActions.updateName}
								/>
								<FormControl.Feedback />
								<HelpBlock>{this.state.helpBlock}</HelpBlock>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						<Col md={8}>
							<Button type='submit'>Submit</Button>
						</Col>
					</Row>
				</Grid>
			</form>
		);
	}
}

export default AddFood;
