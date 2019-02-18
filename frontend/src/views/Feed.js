import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import Filters from "../components/feed/Filters";
import Search from "../components/feed/Search";
import JobFeed from "../components/feed/JobFeed";

class Feed extends React.Component {
  
  render() {
    return(
      <div id="feed">
        <Row id="top-bar" className="career-navbar">
          <Col lg="4" md="4">
            <Filters />
          </Col>
          <Col lg="4" md="4" /> 
          <Col lg="4" md="4">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col lg="12" md="12" className="career-feed">
            {// The Job Feed component will be feed a list of ids to render out 
            }
            <JobFeed />
          </Col>
        </Row>
      </div>
      
    );
  }

}

export default Feed;