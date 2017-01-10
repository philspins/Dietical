// src/components/Footer.js
/*eslint no-console:0 */

import React from "react";
import {Grid,
				Row,
				Col,
        Glyphicon} from "react-bootstrap";

import FooterStore from "../stores/FooterStore";
import FooterActions from "../actions/FooterActions";


class MyFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = FooterStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		FooterStore.listen(this.onChange);
	}

	componentWillUnmount() {
		FooterStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	render() {
		return (
			<footer className="block-center">
				<Glyphicon glyph="info-sign" /> You may view the <a href='https://github.com/philspins/NourishMe'>Source Code</a> behind this project on GitHub. Copyright © 2016 Philip Craig.
			</footer>
		);
	}
}

export default MyFooter;
