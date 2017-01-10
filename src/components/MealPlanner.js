// src/components/MealPlanner.js
/*eslint no-console:0 */

import React from "react";

//import WeekPicker from "./WeekPicker";
//import WeekPicker2 from "./WeekPickerES6";
import CalendarNav from "./CalendarNav";
import MealPlannerStore from "../stores/MealPlannerStore";
import MealPlannerActions from "../actions/MealPlannerActions";


class MealPlanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = MealPlannerStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MealPlannerStore.listen(this.onChange);
	}

	componentWillUnmount() {
		MealPlannerStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<CalendarNav />
		);
	}
}

export default MealPlanner;
