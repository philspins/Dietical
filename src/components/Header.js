// src/components/Header.js
/*eslint no-console:0 */


import React from "react";
import {LinkContainer} from "react-router-bootstrap";
import {Navbar,
        Nav,
        NavItem,
        NavDropdown,
        MenuItem,
				Image} from "react-bootstrap";

import HeaderStore from "../stores/HeaderStore";
import HeaderActions from "../actions/HeaderActions";


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
        <Navbar fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer to="/">
								<a href="#"><Image src="/images/favicon.png" />&nbsp;&nbsp;Nourish Me!</a>
							</LinkContainer>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1} href="/">Home</NavItem>
            </LinkContainer>
						<LinkContainer to="/planner">
							<NavItem eventKey={2} href="#">Meal Planner</NavItem>
						</LinkContainer>
						<NavDropdown eventKey={3} title="Recipes" id="basic-nav-dropdown">
							<NavDropdown eventKey={3} title="Cousine" noCaret className="dropdown-submenu">
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "american" } }}>
									<MenuItem eventKey={1.1}>American</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "mexican" } }}>
									<MenuItem eventKey={1.2}>Mexican</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "italian" } }}>
									<MenuItem eventKey={1.3}>Italian</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "french" } }}>
									<MenuItem eventKey={1.4}>French</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown eventKey={3.2} title="Main Ingredient" noCaret className="dropdown-submenu">
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "chicken" } }}>
									<MenuItem eventKey={1.1}>Chicken</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "pork" } }}>
									<MenuItem eventKey={1.2}>Pork</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "beef" } }}>
									<MenuItem eventKey={1.3}>Beef</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "seafood" } }}>
									<MenuItem eventKey={1.4}>Seafood</MenuItem>
								</LinkContainer>
							</NavDropdown>
							<NavDropdown eventKey={3.3} title="Meal Type" noCaret className="dropdown-submenu">
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "breakfast" } }}>
									<MenuItem eventKey={1.1}>Breakfast</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "lunch" } }}>
									<MenuItem eventKey={1.2}>Lunch</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "dinner" } }}>
									<MenuItem eventKey={1.3}>Dinner</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "snack" } }}>
									<MenuItem eventKey={1.4}>Snack</MenuItem>
								</LinkContainer>
								<LinkContainer to={{ pathname: "/recipes", query: { tags: "dessert" } }}>
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
								<MenuItem eventKey={3.5} href="/recipes/add">Add a recipe</MenuItem>
							</LinkContainer>
						</NavDropdown>
						<NavDropdown eventKey={3} title="Food Items" id="basic-nav-dropdown">
							<LinkContainer to={{ pathname: "/food", query: { type: "proteins" } }}>
								<MenuItem eventKey={1.1}>Proteins</MenuItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: "/food", query: { type: "carbs" } }}>
								<MenuItem eventKey={1.2}>Carbs</MenuItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: "/food", query: { type: "fats" } }}>
								<MenuItem eventKey={1.3}>Fats</MenuItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: "/food", query: { type: "all" } }}>
								<MenuItem eventKey={3.4}>
									View All
								</MenuItem>
							</LinkContainer>
							<MenuItem divider />
							<LinkContainer to="/food/add">
								<MenuItem eventKey={3.5}>Add an item</MenuItem>
							</LinkContainer>
						</NavDropdown>
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
