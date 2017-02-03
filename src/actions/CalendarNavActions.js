// src/actions/CalendarNavActions.js
/* eslint */

import toastr from "toastr";

import alt from "../utils/Dispatcher";


class CalendarNavActions {
	constructor() {
		this.generateActions(
			"getCurrentWeekSuccess",
			"getCurrentWeekFail",
			"moveNextDay",
			"movePrevDay"
    );
	}

	getNow() {
		return new Date();
	}

	selectDate(newDate) {
		return newDate;
	}
}

export default alt.createActions(CalendarNavActions);
