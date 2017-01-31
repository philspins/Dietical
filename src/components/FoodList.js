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
		let foodList = "";

		return (
      <div className='container'>
        <div className='list-group'>
					<div key={1} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{1}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/food/" + 1}>
									<img className='media-object' src='http://pngimg.com/upload/carrot_PNG4985.png' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/food/" + 1}>Carrot</Link>
								</h4>
							</div>
						</div>
					</div>
					<div key={2} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{2}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/food/" + 2}>
									<img className='media-object' src='http://www.irishnews.com/picturesarchive/irishnews/irishnews/2016/01/04/114204997-20c06d35-2d7e-4e51-8bd6-50b866c8648c.jpg' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/food/" + 2}>Celery</Link>
								</h4>
							</div>
						</div>
					</div>
					<div key={3} className='list-group-item animated fadeIn'>
						<div className='media'>
							<span className='position pull-left'>{3}</span>
							<div className='pull-left thumb-lg'>
								<Link to={"/food/" + 3}>
									<img className='media-object' src='http://www.glatt-organics.com/wp-content/uploads/2013/08/iStock_000010753409Large.jpg' />
								</Link>
							</div>
							<div className='media-body'>
								<h4 className='media-heading'>
									<Link to={"/food/" + 3}>Chicken breast</Link>
								</h4>
							</div>
						</div>
					</div>
        </div>
      </div>
		);
	}
}

export default FoodList;
