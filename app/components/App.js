import React from 'react';
import MyNavbar from './Navbar';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
          <MyNavbar history={this.props.history} />
          {this.props.children}
          <Footer />
      </div>
    );
  }
}

export default App
