// src/components/FoodItem.js
/* eslint */

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

import FoodItemStore from "../stores/FoodItemStore";
import FoodItemActions from "../actions/FoodItemActions";


class FoodItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = FoodItemStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FoodItemStore.listen(this.onChange);
		FoodItemActions.getFoodItem(this.props.params.id);
	}

	componentWillUnmount() {
		FoodItemStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.params.id !== this.props.params.id) {
			FoodItemActions.getFoodItem(this.props.params.id);
		}
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
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
								<Col md={12}>
									<h4><strong>Quantity: </strong>{this.state.quantity}</h4>
									<h4><strong>Weight: </strong>{this.state.weight}g</h4>
									<h4><strong>Calories: </strong>{this.state.calories}g</h4>
									<h4><strong>Protein: </strong>{this.state.protein}g</h4>
									<h4><strong>Carbohydrates: </strong>{this.state.carbs}g</h4>
									<h4><strong>Fat: </strong>{this.state.fat}g</h4>
									<h4><strong>Fibre: </strong>{this.state.fibre}g</h4>
								</Col>
							</Row>
						</Grid>
					</td>
				</tr>
			</table>
		);
	}
}

export default FoodItem;
