import React, { Component } from 'react';

class SavedJobs extends Component {
  componentDidMount() {
    document.title = 'Saved Jobs';
  }

  render() {
    return (
      <div>
        <h1>Saved Jobs for user {this.props.match.params.id} </h1>
      </div>
    );
    
  }
}

export default SavedJobs;