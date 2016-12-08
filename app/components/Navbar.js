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
        MenuItem} from 'react-bootstrap';


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
                    <a href="#">React-Broiler</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
    );
  }
}

export default MyNavbar;
