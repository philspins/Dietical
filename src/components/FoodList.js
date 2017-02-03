// src/components/FoodList.js
/* eslint */

import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {ListGroup,
				ListGroupItem,
        Media,
				Thumbnail,
				Image,
				Grid,
				Row,
				Col} from "react-bootstrap";
import {isEqual} from "underscore";

import FoodListStore from "../stores/FoodListStore";
import FoodListActions from "../actions/FoodListActions";

class FoodList extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = FoodListStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FoodListStore.listen(this.onChange);
		FoodListActions.getFoodItems();
	}

	componentWillUnmount() {
		FoodListStore.unlisten(this.onChange);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.params.id !== this.props.params.id) {
			FoodListActions.getFoodItems();
		}
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		if(!this.state.food.length){
			return (
				<div className="spinner">
					<Image src="/images/spinner.gif"/>
				</div>
			);
		}

		let foodList = this.state.food.map((food, index) => {
			return (
				<LinkContainer to={"/food/" + food.id}>
					<ListGroupItem className="col-xs-6">
						<Media>
							<Thumbnail src={food.ImageURL || "/images/placeholder.png"} className="pull-left thumb-lg"/>
							<Media.Body>
								<Media.Heading>{food.Name}</Media.Heading>
								<small>Unit: <strong>{food.Quantity}</strong></small>
								<br />
								<small>Calories: <strong>{food.Calories}</strong></small>
								<br />
								<small>
									Protein: <strong>{food.Protein}</strong><span> - </span>
									Fat: <strong>{food.Fat}</strong><span> - </span>
									Carbs: <strong>{food.Carbs}</strong><span> - </span>
									Fibre: <strong>{food.Fibre}</strong>
								</small>
							</Media.Body>
						</Media>
					</ListGroupItem>
				</LinkContainer>
			);
		});

		return (
      <Grid className="">
        <ListGroup className="row animated fadeIn">
					{foodList}
        </ListGroup>
      </Grid>
		);
	}
}

export default FoodList;
