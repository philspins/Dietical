// src/components/MealPlanner.js
/*eslint no-console:0 */

import React from 'react';
import {Jumbotron} from 'react-bootstrap'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

import MealPlannerStore from '../stores/MealPlannerStore';
import MealPlannerActions from '../actions/MealPlannerActions';
import myEventsList from '../events.js';

class MealPlanner extends React.Component {
	constructor(props) {
  	super(props);
  	this.state = MealPlannerStore.getState();
  	this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MealPlannerStore.listen(this.onChange);
		BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
	}

	componentWillUnmount() {
  	MealPlannerStore.unlisten(this.onChange);
	}

	onChange(state) {
  	this.setState(state);
	}

	render() {
  	return (
			<Jumbotron>
				test
				<BigCalendar
					events={myEventsList}
					defaultDate={new Date(2015, 3, 1)}
				/>
			</Jumbotron>
    );
  }
}

export default MealPlanner;
