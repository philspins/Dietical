// src/components/FoodItem.js
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
		FoodItemStore.unlisten(this.onChange);
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
						<div className='food-item-img'>
							<a className='magnific-popup' href={"https://somepath/" + this.state.FoodItemId + ".jpg"}>
								<img src={"https://somepath/" + this.state.FoodItemId + ".jpg"} />
							</a>
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
