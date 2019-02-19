import React, { Component } from 'react';

class Home extends Component {
  componentDidMount() {
    document.title = 'Home Page';
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <ul>
          <li>
            <a href="/feed">feed</a>
          </li>
        </ul>

      </div>
    );
  }
}

export default Home;