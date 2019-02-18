import React from "react";

import {
  Row,
  Col
} from "reactstrap";

class JobOverview extends React.Component {
  render() {
    return(
      <Row>
        <Col>
          {this.props.data.job.name}
        </Col>
      </Row>
    );
  }
}

export default JobOverview;