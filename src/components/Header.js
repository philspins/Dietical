// src/components/Header.js
/*eslint no-console:0 */

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
            <LinkContainer to="/">
              <NavItem eventKey={1} href="#">Home</NavItem>
            </LinkContainer>
						<LinkContainer to="/planner">
							<NavItem eventKey={2} href="#">Meal Planner</NavItem>
						</LinkContainer>
						<NavDropdown eventKey={3} title="Recipes" id="basic-nav-dropdown">
							<NavDropdown eventKey={3} title="Cousine" noCaret className="dropdown-submenu">
								<LinkContainer to="/recipes/tags/american">
									<MenuItem eventKey={1.1}>American</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/mexican">
									<MenuItem eventKey={1.2}>Mexican</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/italian">
									<MenuItem eventKey={1.3}>Italian</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/french">
									<MenuItem eventKey={1.4}>French</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown eventKey={3.2} title="Main Ingredient" noCaret className="dropdown-submenu">
								<LinkContainer to="/recipes/tags/chicken">
									<MenuItem eventKey={1.1}>Chicken</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/pork">
									<MenuItem eventKey={1.2}>Pork</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/beef">
									<MenuItem eventKey={1.3}>Beef</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/seafood">
									<MenuItem eventKey={1.4}>Seafood</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown eventKey={3.3} title="Meal Type" noCaret className="dropdown-submenu">
								<LinkContainer to="/recipes/tags/breakfast">
									<MenuItem eventKey={1.1}>Breakfast</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/lunch">
									<MenuItem eventKey={1.2}>Lunch</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/dinner">
									<MenuItem eventKey={1.3}>Dinner</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/snack">
									<MenuItem eventKey={1.4}>Snack</MenuItem>
								</LinkContainer>
								<LinkContainer to="/recipes/tags/dessert">
									<MenuItem eventKey={1.4}>Dessert</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<LinkContainer to="/recipes">
								<MenuItem eventKey={3.4}>
									View All
								</MenuItem>
							</LinkContainer>
							<MenuItem divider />
							<LinkContainer to="/recipes/add">
								<MenuItem eventKey={3.5}>Add a recipe</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<LinkContainer to="/food">
							<MenuItem eventKey={4}>
								Food Items
							</MenuItem>
						</LinkContainer>
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
