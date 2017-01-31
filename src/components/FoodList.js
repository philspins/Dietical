// src/components/FoodList.js
/*eslint no-console:0 */

import React from "react";
import {Link} from "react-router";
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
		//FoodListActions.getFoodItems();
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		let foodList = this.state.food.map((food, index) => {
			return (
				<div key={food.id} className='list-group-item animated fadeIn'>
					<div className='media'>
						<span className='position pull-left'>{food.id}</span>
						<div className='pull-left thumb-lg'>
							<Link to={"/food/" + 1}>
								<img className='media-object' src={food.ImageURL || "/images/placeholder.png"} />
							</Link>
						</div>
						<div className='media-body'>
							<h4 className='media-heading'>
								<Link to={"/food/" + 1}>{food.Name}</Link>
							</h4>
							<small>Unit: <strong>{food.Quantity}</strong></small>
              <br />
              <small>Calories: <strong>{food.Calories}</strong></small>
              <br />
              <small>
								Protein: <strong>{food.Protein}</strong><span> - </span>
								Fat: <strong>{food.Fat}</strong><span> - </span>
								Net Carbs: <strong>{food.Carbs - food.Fibre}</strong>
							</small>
						</div>
					</div>
				</div>
			);
		});

		return (
      <div className='container'>
        <div className='list-group'>
					{foodList}
        </div>
      </div>
		);
	}
}

export default FoodList;
