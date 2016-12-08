import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
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
	     	<footer>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-5'>
							<h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
							<p>
								Powered by <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>React</strong>,
								<strong> React-Bootstrap</strong> and <strong>MongoDB</strong> with Flux architecture
								via <strong>Alt</strong>.
							</p>
							<p>You may view the <a href='https://github.com/philspins/react-broiler'>Source Code</a> behind this project on GitHub.</p>
							<p>Distributed under MIT license. Copyright © 2016 Philip Craig.</p>
						</div>
					</div>
				</div>
			</footer>
	    );
	}
}

export default Footer;
