// src/components/MealPlanner.js
/*eslint no-console:0 */

import React from "react";
import {Grid,
        Row,
        Col,
				Button,
				ButtonGroup,
				Glyphicon,
				Image,
				ListGroup,
				ListGroupItem,
				Jumbotron} from "react-bootstrap";
import moment from "moment";

import CalendarNav from "./CalendarNav";
import MealPlannerStore from "../stores/MealPlannerStore";
import MealPlannerActions from "../actions/MealPlannerActions";
import CalendarNavStore from "../stores/CalendarNavStore";


class MealPlanner extends React.Component {
	constructor(props) {
		super(props);
		this.state = MealPlannerStore.getState();
		this.state.navState = CalendarNavStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		MealPlannerStore.listen(this.onChange);
		CalendarNavStore.listen(this.onChange);
	}

	componentWillUnmount() {
		MealPlannerStore.unlisten(this.onChange);
		CalendarNavStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<Grid className="calendar_navigation_box">
				<CalendarNav />

				<Row>
					<Col md={12}>
						<h3>{moment(this.state.currentDate).format("dddd")}'s meal plan</h3>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default MealPlanner;
