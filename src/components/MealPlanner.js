// src/components/MealPlanner.js
/*eslint no-console:0 */

import 'rc-calendar/assets/index.css';

import React from 'react';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import Test from './Week';

import MealPlannerStore from '../stores/MealPlannerStore';
import MealPlannerActions from '../actions/MealPlannerActions';

const style = `
.week-calendar {
  width: 386px;
}
.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-date {
  background: #ebfaff;
}
.week-calendar .rc-calendar-tbody > tr:hover
.rc-calendar-selected-day .rc-calendar-date {
    background: #3fc7fa;
}
.week-calendar .week-calendar-sidebar {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:100px;
  border-right: 1px solid #ccc;
}
.week-calendar .rc-calendar-panel {
  margin-left: 100px;
}
`;

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
			<div className='container'>
				test
				<div
					style={{
						zIndex: 1000,
						position: 'relative',
						width: 900,
						margin: '20px auto'
					}}
				>
					<style dangerouslySetInnerHTML={{ __html: style }} />
					<div>
						<Test />
					</div>
				</div>
			</div>
		);
	}
}

export default MealPlanner;
