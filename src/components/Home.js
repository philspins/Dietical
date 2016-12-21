// src/components/Home.js
/*eslint no-console:0 */

import React from 'react'
import {Jumbotron} from 'react-bootstrap'

import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {

	constructor(props) {
  	super(props);
  	this.state = HomeStore.getState();
  	this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		HomeStore.listen(this.onChange);
	}

	componentWillUnmount() {
  	HomeStore.unlisten(this.onChange);
	}

	onChange(state) {
  	this.setState(state);
	}

	render() {
  	return (
			<Jumbotron>
				<h2>
					<p>You are home.</p>
      	</h2>
    	</Jumbotron>
    );
  }
}

export default Home;
