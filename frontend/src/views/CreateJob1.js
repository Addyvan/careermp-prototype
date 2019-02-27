import React, { Component } from 'react';
import { Redirect } from 'react-router';

import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";

import {
  Row,
  Col,
  Input,
  Button
} from "reactstrap";

import SmartInput from "../components/createjob/SmartInput";
import { 
  departmentIndex,
  departmentSearchValues
} from "../components/createjob/SmartSearchDepartment";
import { 
  locationIndex,
  locationSearchValues
} from "../components/createjob/SmartSearchLocation";
import { 
  classificationIndex,
  classificationSearchValues
} from "../components/createjob/SmartSearchClassification";

const JOB_STATS_QUERY = gql`
    query GetJobStats($gcID: String) {
        jobs( gcID: $gcID ) {
          id
          onBoarded
          type
        }
    }
`;

const CREATE_JOB = gql`
  mutation CreateJob($gcID: ID!, $name: String!, $department: DepartmentEnum!, $classification: ClassificationEnum!, $location: LocationEnum!) {
    createJob(
      job: {
        name: $name
        owner: {
          gcID: $gcID
        },
        department: $department,
        classification: $classification,
        location: $location
      }
    ) {
      id
    }
  }
`;


class CreateJob1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      department: null,
      name: null,
      classification: null,
      location: null, 
      estimate: null
    };

    this.changeName = this.changeName.bind(this);
    this.changeClassification = this.changeClassification.bind(this);
    this.changeDepartment = this.changeDepartment.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
  }

  componentDidMount() {
    document.title = 'Create Job';
  }

  changeName(event) {
    this.setState({name: event.target.value});
  }

  changeDepartment(text) {
    this.setState({department: text});
  }

  changeLocation(text) {
    this.setState({location: text});
  }

  changeClassification(text) {
    this.setState({classification: text});
  }

  render() {
    return (
      <div>
        <Mutation mutation={CREATE_JOB}>
          {
            (createJob, { data }) => {

              return(
                <div>
                  <Row style={{marginTop: "30px", marginBottom: "15px"}}>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6"  style={{paddingLeft: "25px", paddingRight: "25px"}}>
                      <Input 
                        tag={Input}
                        type="text"
                        id="name"
                        value={this.state.name}
                        onChange={this.changeName}
                        placeholder="Job Title"
                        aria-owns={"results-" + this.props.section}
                      />
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                  <Row>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6">
                      <SmartInput 
                        placeholder="Department"
                        section="desktop"
                        searchIndex={departmentIndex}
                        searchValues={departmentSearchValues}
                        onChange={this.changeDepartment}
                      />
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                  <Row>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6">
                      <SmartInput 
                        placeholder="Classification"
                        section="desktop"
                        searchIndex={classificationIndex}
                        searchValues={classificationSearchValues}
                        onChange={this.changeClassification}
                      />
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                  <Row>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6">
                      <SmartInput 
                        placeholder="Location"
                        section="desktop"
                        searchIndex={locationIndex}
                        searchValues={locationSearchValues}
                        onChange={this.changeLocation}
                      />
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                  <Row style={{marginTop: "100px"}}>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6">
                      <Button style={{width:"100%"}} onClick={
                        () => {
                          createJob({variables: {
                            gcID: this.props.user.profile.sub,
                            name: this.state.name,
                            department: this.state.department, 
                            classification: this.state.classification,
                            location: this.state.location
                          }});
                        }
                      }>Create Job</Button>
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                  <Row>
                    <Col lg="3" md="3" />
                    <Col lg="6" md="6">
                      {(data) ? 
                        ((data.createJob) ? <Redirect to={"/createjob2/" + data.createJob.id} /> : "try again")
                        : ""}
                    </Col>
                    <Col lg="3" md="3" />
                  </Row>
                </div>
              );
              
            }
          }
        </Mutation>
        
      </div>
    );
    
  }
}

export default CreateJob1;