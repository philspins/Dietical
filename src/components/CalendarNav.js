// src/components/CalendarNav.js
/* eslint */

require("../styles/Calendar.css");

import React from "react";
import {Grid,
        Row,
        Col,
				Button,
				ButtonGroup,
				Glyphicon,
				Image,
				ListGroup,
				ListGroupItem} from "react-bootstrap";
import moment from "moment";
import toastr from "toastr";

import CalendarNavStore from "../stores/CalendarNavStore";
import CalendarNavActions from "../actions/CalendarNavActions";


class CalendarNav extends React.Component {
	constructor(props){
		super(props);
		this.state = CalendarNavStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		CalendarNavStore.listen(this.onChange);
		CalendarNavActions.getNow();
	}

	componentWillUnmount() {
		CalendarNavStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	getDay() {
		return this.state.currentDate;
	}

	render() {
		var week = this.state.currentWeek.map((day) => {
			return(
				<li
					key={day.valueOf()}
					className={moment(day).date() == moment(this.state.currentDate).date() ? "calendar_item active_date" : "calendar_item"}
					onClick={CalendarNavActions.selectDate.bind(this, day)}
				>
					<div className="calendar_preview_header">
						<div className="calendar_preview_title">
							{moment(day).format("dddd")}
						</div>
						<div className="calendar_preview_number">
							{moment(day).date()}
						</div>
					</div>
					<div className="calendar_diet_preview">
						{"test"}
					</div>
				</li>
			);
		});

		return (
      <Grid bsClass="calendar_navigation_box">
				<Row>
					<Col md={12}>
						<ButtonGroup bsClass="calendar_nav_buttons btn-group btn-group-justified">
							<ButtonGroup>
								<Button bsClass="btn btn-default previous_date_button" onClick={CalendarNavActions.movePrevDay.bind(this)}>
									<Glyphicon glyph="chevron-left" />
								</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button bsClass="btn btn-default calendar_button">
									<span className="calendar_load_status"><Image src="/images/calendar_spinner.gif" /></span>
									<span className="date_label">{moment(this.state.currentDate).format("LL")}</span>
								</Button>
							</ButtonGroup>
							<ButtonGroup>
								<Button bsClass="btn btn-default next_date_button" onClick={CalendarNavActions.moveNextDay.bind(this)}>
									<Glyphicon glyph="chevron-right" />
								</Button>
							</ButtonGroup>
						</ButtonGroup>
					</Col>
				</Row>
				<Row bsClass="calendar_carousel row">
					<Col md={12}>
						<ButtonGroup bsClass='date_carousel'>
							<ListGroup bsClass='calendar_list_elements' componentClass="li">
								{week}
							</ListGroup>
						</ButtonGroup>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Button bsClass="btn btn-default btn-xs calendar_today_button" onClick={CalendarNavActions.getNow.bind(this)}>Jump to today</Button>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default CalendarNav;
