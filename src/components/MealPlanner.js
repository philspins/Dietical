// src/components/MealPlanner.js
/*eslint no-console:0 */

require("../styles/Planner.css");

import React from "react";
import {Grid,
        Row,
        Col} from "react-bootstrap";
import moment from "moment";
import {Pie} from "react-chartjs-2";

import CalendarNav from "./CalendarNav";
import CalendarNavStore from "../stores/CalendarNavStore";
import MealItem from "./MealItem";
import MealPlannerStore from "../stores/MealPlannerStore";
import MealPlannerActions from "../actions/MealPlannerActions";

class MealPlanner extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = MealPlannerStore.getState();
		this.state.navState = CalendarNavStore.getState();
		this.onChange = this.onChange.bind(this);
		this.updateChart();
		this.chartOptions = {
			legend: {
				display: false
			}
		};
	}

	componentDidMount() {
		MealPlannerStore.listen(this.onChange);
		CalendarNavStore.listen(this.onChange);
	}

	componentWillUnmount() {
		MealPlannerStore.unlisten(this.onChange);
		CalendarNavStore.unlisten(this.onChange);
	}

	componentDidUpdate() {
		MealPlannerActions.setMealDay(this.state.currentDate);
		updateChart();
	}

	onChange(state) {
		this.setState(state);
	}

	updateChart() {
		this.chartData = {
			labels: [
				"Carbs (g)",
				"Protein (g)",
				"Fat (g)"
			],
			datasets: [{
				data: [this.state.carbs, this.state.fat, this.state.protein],
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
	}

	render() {
		return (
			<Grid>
				<CalendarNav />

				<Row>
					<Col md={12}>
						<Grid bsClass="single_day_view">
							<Row className="single_day_title">
								<Col md={12}>
									<h3>{moment(this.state.mealDay).format("dddd")}'s meal plan</h3>
								</Col>
							</Row>
							<Row>
								<Col md={9} className="meal_list">
									<Grid className="meal_box">
										<Row className="meal_header">
											<Col>
												<h4>Breakfast</h4>
											</Col>
										</Row>
										<MealItem />
										<MealItem />
									</Grid>
									<Grid className="meal_box">
										<Row className="meal_header">
											<Col>
												<h4>Lunch</h4>
											</Col>
										</Row>
										<MealItem />
										<MealItem />
										<MealItem />
									</Grid>
									<Grid className="meal_box">
										<Row className="meal_header">
											<Col>
												<h4>Dinner</h4>
											</Col>
										</Row>
										<MealItem />
										<MealItem />
										<MealItem />
									</Grid>
								</Col>
								<Col md={3} className="macro_panel">
									Percent calories from...<br />
									<Pie data={this.chartData} options={this.chartOptions} width={200} height={200}/>
									<strong>Cumulative Stats:</strong><br />
									{this.state.carbs}g Carbs<br />
									<div className="net_carbs_div">{(this.state.carbs - this.state.fibre).toFixed(1)}g net carbs</div>
									{this.state.fat}g Fat<br />
									{this.state.protein}g Protein<br />
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
