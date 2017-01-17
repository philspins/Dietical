// src/actions/CalendarNavActions.js
/*eslint no-console:0 */

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
