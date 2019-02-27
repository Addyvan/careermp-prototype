import React, { Component } from 'react';

import {
  Row, 
  Col
} from "reactstrap";

class CreateJob2 extends Component {
  componentDidMount() {
    document.title = 'Create Job';
  }

  render() {
    
    return (
      <div>
        <Row>
          <Col lg="3" md="3">
          </Col>
        </Row>
        <Row>
          Creation wizard for job:
          {this.props.match.params.id}
        </Row>
      </div>
    );
    
  }
}

export default CreateJob2;