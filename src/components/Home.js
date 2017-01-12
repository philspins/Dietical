// src/components/Home.js
/*eslint no-console:0 */

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

import HomeStore from "../stores/HomeStore";
import HomeActions from "../actions/HomeActions";

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
			<Grid>
				<Row>
					<Col md={12}>
						<h2>You are home.</h2>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Home;
