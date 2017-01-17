// src/components/MealItem.js
/*eslint no-console:0 */

import React from "react";
import {Row,
        Col,
				Button,
				Glyphicon,
				Image} from "react-bootstrap";
import moment from "moment";

import MealItemStore from "../stores/MealItemStore";
import MealItemActions from "../actions/MealItemActions";

class MealItem extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = MealItemStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MealItemStore.listen(this.onChange);

	}

	componentWillUnmount() {
		MealItemStore.unlisten(this.onChange);
	}

	componentDidUpdate() {
	}

	onChange(state) {
		this.setState(state);
	}


	render() {
		return (
			<div className="food_box">
				<Col xs={2} className="food_image">
					<Image responsive src="http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg" />
				</Col>
				<Col xs={4} className="food_name">
					<div className="print_name">Hot Dog</div>
				</Col>
				<Col xs={4} className="food_units">
					1 Hotdog
				</Col>
			</div>
		);
	}
}

export default MealItem;
