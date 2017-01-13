// src/components/MealPlanner.js
/*eslint no-console:0 */

require("../styles/Planner.css");

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
import {Pie} from "react-chartjs-2";

import CalendarNav from "./CalendarNav";
import MealPlannerStore from "../stores/MealPlannerStore";
import MealPlannerActions from "../actions/MealPlannerActions";
import CalendarNavStore from "../stores/CalendarNavStore";

const chartData = {
	labels: [
		"Carbs (g)",
		"Protein (g)",
		"Fat (g)"
	],
	datasets: [{
		data: [5, 30, 65],
		backgroundColor: [
			"#36A2EB",
			"#FFCE56",
			"#FF6384"
		],
		hoverBackgroundColor: [
			"#36A2EB",
			"#FFCE56",
			"#FF6384"
		]
	}]
};

const chartOptions = {
	legend: {
		position: "right"
	}
};

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
			<Grid>
				<CalendarNav />

				<Row>
					<Col md={12}>
						<Grid bsClass="single_day_view">
							<Row>
								<Col md={12}>
									<h3>{moment(this.state.currentDate).format("dddd")}'s meal plan</h3>
								</Col>
							</Row>
							<Row>
								<Col md={8}>
									Blah
								</Col>
								<Col md={4}>
									<Pie data={chartData} options={chartOptions}/>
								</Col>
							</Row>
						</Grid>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default MealPlanner;
