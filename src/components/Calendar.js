/* eslint react/no-multi-comp:0, no-console:0 */

import 'rc-calendar/assets/index.css';
import 'rc-select/assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import FullCalendar from 'rc-calendar/lib/FullCalendar';
import Select from 'rc-select';
import moment from 'moment';
import enUS from 'rc-calendar/lib/locale/en_US';
import 'moment/locale/en-gb';


class Calendar extends React.Component {
	constructor(props){
		super(props);
		const format = 'YYYY-MM-DD';
		const now = moment();
		now.locale('en-us').utcOffset(0);
		defaultCalendarValue.add(-1, 'month');
		const defaultCalendarValue = now.clone();
	}
	getInitialState() {
		return {
			type: 'month'
		};
	}

	onTypeChange(type) {
		this.setState({
			type
		});
	}

	onSelect(value) {
		console.log('select', value.format(this.format));
	}

	render() {
		return (
      <div style={{ zIndex: 1000, position: 'relative' }}>
        <FullCalendar
          style={{ margin: 10 }}
          Select={Select}
          fullscreen={false}
          onSelect={this.onSelect}
          defaultValue={this.now}
          locale={enUS}
        />
        <FullCalendar
          style={{ margin: 10 }}
          Select={Select}
          fullscreen
          defaultValue={this.now}
          onSelect={this.onSelect}
          type={this.state.type}
          onTypeChange={this.onTypeChange}
          locale={enUS}
        />
      </div>
		);
	}
}

export default Calendar;
