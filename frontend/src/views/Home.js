import React, { Component } from 'react';
import { Redirect } from 'react-router';


class Home extends Component {
  componentDidMount() {
    document.title = 'Home Page';
  }

  render() {
    if (this.props.user) {
      return(
        <Redirect to="/userfeed"/>
      );
    } else {
      return (
        <div>
          <h1>Please Log in</h1>
        </div>
      );
    }
  }
}

export default Home;