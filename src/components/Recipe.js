// src/components/Recipe.js
/* eslint */

import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Grid,
				Row,
				Col,
				Thumbnail,
				Image,
				ListGroup,
				ListGroupItem} from "react-bootstrap";

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
		let ingredients = this.state.ingredients.map((ingredient, index) => {
			return (
				<LinkContainer to={"/food/" + ingredient.id}>
					<ListGroupItem bsClass="ingredient-box">
							<Col xs={2} className="food_image">
								<Image responsive src={ingredient.ImageURL || "/images/placeholder.png"} />
							</Col>
							<Col xs={6} className="food_name">
								<div className="print_name">{ingredient.Name}</div>
							</Col>
							<Col xs={4} className="food_units">
								{ingredient.Quantity}
							</Col>
					</ListGroupItem>
				</LinkContainer>
			);
		});

		return (
      <table className="container item-box">
				<tr>
					<td className="item-img">
						<Thumbnail src={this.state.imageurl || "/images/placeholder.png"} />
					</td>
					<td>
						<Grid className="info-col">
							<h2 className="item-title"><strong>{this.state.name}</strong></h2>
							<Row>
								<Col md={1}>
									<h4>Instructions:</h4>
								</Col>
								<Col md={10} className="item-info">
									<h5 className="recipe-instructions">{this.state.instructions}</h5>
								</Col>
							</Row>
							<Row>
								<Col md={1}>
									<h4>Ingredients:</h4>
								</Col>
								<Col md={10} className="item-info">
									<h5>
										<ListGroup className="recipe-ingredients">
											{ingredients}
										</ListGroup>
									</h5>
								</Col>
							</Row>
							<Row>
								<Col md={1}>
									<h4>Tags:</h4>
								</Col>
								<Col md={10} className="item-info">
									<h5>test</h5>
								</Col>
							</Row>
						</Grid>
					</td>
			</tr>
			</table>
		);
	}
}

export default Recipe;
