import React from "react";

import {
  Row,
  Col,
  Spinner,
  Button
} from "reactstrap";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import Filters from "../components/feed/Filters";
import Search from "../components/feed/Search";
import JobFeed from "../components/feed/JobFeed";

const COLLABORATIVE_RECOMMENDATIONS = gql`
  query GetRecommendations($gcID: String!) {
    collaborativeRecommendations( gcID: $gcID ) {
      id
    }
  }
`;

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
          <Col lg="2" md="2" /> 
          <Col lg="4" md="4" style={{paddingLeft: "100px"}}>
            <Search />
          </Col>
          <Col lg="2" md="2" style={{paddingLeft: "75px"}}>
            <Button href="/createjob1">Post Job</Button>
          </Col> 
        </Row>
        <Row>
          <Col lg="6" md="6" style={{paddingLeft: "0px"}}>
            <div className="career-feed" style={{paddingLeft: "15px", paddingRight: "15px", paddingBottom: "15px",  margin: "0px"}}>
              {// The Job Feed component will be feed a list of ids to render out 
              }
              <b>Based off your viewing history</b>
              <hr />
              {(this.props.user) ? 
                <Query query={COLLABORATIVE_RECOMMENDATIONS} variables={{gcID: this.props.user.profile.sub.toString()}}>
                  {
                    ({ loading, error, data }) => {
                      if (loading) return (<Spinner color="primary" />);
                      if (error) { 
                        console.log(this.props.user.profile.sub);
                        console.log(error); 
                        return null; 
                      }
                      if (data) {
                        console.log(data);
                        var ids = [];
                        for (var i = 0; i < data.collaborativeRecommendations.length; i++ ) {
                          ids.push(data.collaborativeRecommendations[i].id);
                        }
                        console.log(ids);
                        return(<JobFeed job_ids={ids} />);
                      } else {
                        console.log(this.props.user.profile.sub);
                        return(null);
                      }
                    }
                  }
                </Query>
              : "no user logged in"}
              
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