import React from 'react';
import MyNavbar from './Navbar';
import MyFooter from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
				<MyNavbar history={this.props.history} />
				{this.props.children}
				<MyFooter />
      </div>
    );
  }
}

export default App
