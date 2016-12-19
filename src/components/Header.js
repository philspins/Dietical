import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,
        Nav,
        NavItem,
        NavDropdown,
        MenuItem,
				Image} from 'react-bootstrap';

import HeaderStore from '../stores/HeaderStore';
import HeaderActions from '../actions/HeaderActions';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = HeaderStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HeaderStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HeaderStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <Navbar staticTop>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer to="/">
								<a href="#"><Image src="http://dev.subversivelabs.ca/favicon.png" />&nbsp;&nbsp;Nourish Me!</a>
							</LinkContainer>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Home</NavItem>
						<NavItem eventKey={2} href="#">Meal Planner</NavItem>
						<NavDropdown eventKey={3} title="Recipes" id="basic-nav-dropdown">
							<NavDropdown eventKey={3} title="Cousine" noCaret className="dropdown-submenu">
								<MenuItem eventKey={1.1}>American</MenuItem>
								<MenuItem eventKey={1.2}>Mexican</MenuItem>
								<MenuItem eventKey={1.3}>Italian</MenuItem>
								<MenuItem eventKey={1.4}>French</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3.2} title="Main Ingredient" noCaret className="dropdown-submenu">
								<MenuItem eventKey={1.1}>Chicken</MenuItem>
								<MenuItem eventKey={1.2}>Pork</MenuItem>
								<MenuItem eventKey={1.3}>Beef</MenuItem>
								<MenuItem eventKey={1.4}>Seafood</MenuItem>
							</NavDropdown>
							<NavDropdown eventKey={3.3} title="Meal Type" noCaret className="dropdown-submenu">
								<MenuItem eventKey={1.1}>Breakfast</MenuItem>
								<MenuItem eventKey={1.2}>Lunch</MenuItem>
								<MenuItem eventKey={1.3}>Dinner</MenuItem>
								<MenuItem eventKey={1.4}>Snack</MenuItem>
								<MenuItem eventKey={1.4}>Dessert</MenuItem>
							</NavDropdown>
							<LinkContainer to="/recipes">
								<MenuItem eventKey={3.4}>
									All Recipes
								</MenuItem>
							</LinkContainer>
							<MenuItem divider />
							<LinkContainer to="/recipes/add">
								<MenuItem eventKey={3.5}>Add a recipe</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<NavItem eventKey={4} href="#">Food Items</NavItem>
					</Nav>
					<Nav pullRight>
						<Navbar.Text>Welcome, Philip!</Navbar.Text>
						<NavItem eventKey={1} href="#">My Profile</NavItem>
						<NavItem eventKey={2} href="#">Sign Out</NavItem>
					</Nav>
				</Navbar>
    );
  }
}

export default Header;
