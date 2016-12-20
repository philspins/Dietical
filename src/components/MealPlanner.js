import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import MealPlannerStore from '../stores/MealPlannerStore'
import MealPlannerActions from '../actions/MealPlannerActions';

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
			<Jumbotron>
				<h2>
					<p>This is the meal planner component.</p>
      	</h2>
    	</Jumbotron>
    );
  }
}

export default MealPlanner;
