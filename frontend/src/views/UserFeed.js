import React from "react";

import {
  Row,
  Col
} from "reactstrap";

import Filters from "../components/feed/Filters";
import Search from "../components/feed/Search";
import JobFeed from "../components/feed/JobFeed";

class Feed extends React.Component {

  componentDidMount() {
    document.title = 'Career Marketplace';
  }
  
  render() {
    return(
      <div id="feed">
        <Row id="top-bar" className="career-navbar">
          <Col lg="4" md="4">
            <Filters gcID={(this.props.user) ? this.props.user.profile.sub : ""}/>
          </Col>
          <Col lg="4" md="4" /> 
          <Col lg="4" md="4">
            <Search />
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="6" style={{paddingLeft: "0px"}}>
            <div className="career-feed" style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px",  margin: "0px"}}>
              {// The Job Feed component will be feed a list of ids to render out 
              }
              <b>Because you viewed</b>
              <hr />
              <JobFeed job_ids={[]} />
            </div>
          </Col>
          <Col lg="6" md="6" style={{paddingRight: "0px"}}>
            <div className="career-feed" style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px",  margin: "0px"}}>
              {// The Job Feed component will be feed a list of ids to render out 
              }
              <b>Based on your career information</b>
              <hr />
              <JobFeed job_ids={[]} />
            </div>
          </Col>
        </Row>
      </div>
      
    );
  }

}

export default Feed;