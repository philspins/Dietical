import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,
        Header,
        Nav,
        NavItem,
        NavDropdown,
        MenuItem,
				Image} from 'react-bootstrap';


class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<LinkContainer to={{pathname: '/'}}>
								<span><Image src="favicon.png" />&nbsp;&nbsp;Nourish Me!</span>
							</LinkContainer>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Home</NavItem>
						<NavItem eventKey={2} href="#">Meal Planner</NavItem>
						<NavDropdown eventKey={3} title="Recipes" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Cousine</MenuItem>
							<MenuItem eventKey={3.2}>Main Ingredient</MenuItem>
							<MenuItem eventKey={3.3}>Meal Type</MenuItem>
							<MenuItem eventKey={3.4}>All Recipes</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.5}>Add a recipe</MenuItem>
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

export default MyNavbar;
