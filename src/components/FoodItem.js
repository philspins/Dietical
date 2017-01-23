// src/components/FoodItem.js
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
      <Grid>
				<Row>
					<Col sm={8}>
						<div className='food-item-img'>
							<Thumbnail src="/images/placeholder.png" />
						</div>
						<div className='food-item-info clearfix'>
							<h2><strong>{this.state.name}</strong></h2>
							<h4 className='lead'>Unit of Measure: <strong>{this.state.uom}</strong></h4>
							<h4 className='lead'>Weight (g): <strong>{this.state.weight}</strong></h4>
							<h4 className='lead'>Calories: <strong>{this.state.calories}</strong></h4>
							<h4 className='lead'>Protein (g): <strong>{this.state.protein}</strong></h4>
							<h4 className='lead'>Carbohydrates (g): <strong>{this.state.carbs}</strong></h4>
							<h4 className='lead'>Fat (g): <strong>{this.state.fat}</strong></h4>
							<h4 className='lead'>Fibre (g): <strong>{this.state.fibre}</strong></h4>
						</div>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default FoodItem;
