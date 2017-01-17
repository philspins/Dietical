// src/stores/CalendarNavStore.js
/*eslint no-console:0 */

import toastr from "toastr";

import alt from "../utils/Dispatcher";
import CalendarNavActions from "../actions/CalendarNavActions";


class CalendarNavStore {
	constructor() {
		this.bindActions(CalendarNavActions);

		this.currentDate = new Date();
		this.currentWeek = [];
	}

	getCurrentDate(){
		return this.currentDate;
	}

	onGetNow(data){
		this.currentDate = data;
		this.setCurrentWeek();
	}

	onSelectDate(data) {
		this.currentDate = data;
		this.setCurrentWeek();
	}

	onMoveNextDay() {
		let dat = new Date(this.currentDate);

		try{
			dat.setDate(dat.getDate() + 1);
			this.currentDate = dat;
			this.setCurrentWeek();
		}
		catch(err){
			toastr.error(err.message);
		}
	}

	onMovePrevDay() {
		let dat = new Date(this.currentDate);

		try{
			dat.setDate(dat.getDate() - 1);
			this.currentDate = dat;
			this.setCurrentWeek();
		}
		catch(err){
			toastr.error(err.message);
		}
	}

	setCurrentWeek() {
		let dat = new Date(this.currentDate);
		let range = [];

		try{
			dat.setDate(dat.getDate() - 4);
			range.push(new Date(dat));

			for(let i=1; i<=8; i++){
				dat.setDate(dat.getDate() + 1);
				range.push(new Date(dat));
			}
			this.currentWeek = range;
		}
		catch(err){
			toastr.error(err.message);
		}
	}
}

export default alt.createStore(CalendarNavStore);
