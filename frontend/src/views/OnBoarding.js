import React, { Component } from 'react';



/**
 * This class is designed to collect 
 */
class OnBoarding extends Component {
  componentDidMount() {
    document.title = 'OnBoarding';
  }

  render() {
    if (this.props.user) {
      
    } else {
      return (
        <div>
          <h1>Please Log in</h1>
        </div>
      );
    }
  }
}

export default OnBoarding;