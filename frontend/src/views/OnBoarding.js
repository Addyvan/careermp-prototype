import React, { Component } from 'react';

import {
  Row,
  Col,
  Button, 
  Label, 
  Spinner,
  Dropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  Input, 
  Form,
  FormGroup
} from "reactstrap";

import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Redirect } from 'react-router';


const INITIALIZE_USER = gql`

mutation InitializeUser($gcID: String!, $classification: ClassificationEnum!, $type: UserTypeEnum!) {
  initializeUser(
    user: {
      gcID: $gcID,
      onBoarded: true,
      classification: $classification,
      type: $type
    }
  ) {
  	type
  }
}`;

/**
 * This class is designed to collect 
 */
class OnBoarding extends Component {

  constructor(props) {
    super(props);

    this.state = {
      classificationDropdown: false,
      classification: "UNDEFINED",
      userType: "UNDEFINED",
    };

    this.toggleClassification = this.toggleClassification.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  componentDidMount() {
    document.title = 'OnBoarding';
  }


  toggleClassification () {
    this.setState(prevState => ({
      classificationDropdown: !prevState.classificationDropdown
    }));
  }

  redirect(data) {
    if (data && data.initializeUser) {
      if (data.initializeUser.type === "UNDEFINED" || data.initializeUser.classification === "UNDEFINED") {
        return("Error, please try again");
      } else {
        if (data.initializeUser.type === "SEEKER") {
          return(<Redirect to="/userfeed"/>);
        } else {
          return(<Redirect to="/recruiterfeed"/>);
        }
      }
    }
    return(<Redirect to="/"/>);
  }


  render() {
    
    return (
      <div>
      <Row>
        <Col lg="12" md="12">
          <h2>Before we get started, we need to know a little more about you...</h2>
        </Col>
      </Row>
        <Mutation mutation={INITIALIZE_USER}>
          {
            (initializeUser, { data, loading, error }) => {
              return(
                <div>
                  <Row>
                    <Col lg="12" md="12">
                      <Label for="examplePassword">Which of these statements describes you best?</Label>
                      <Form>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" onChange={(evt) => { this.setState({userType: "RECRUITER"})} } />
                            I am looking to hire someone
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type="radio" name="radio1" onChange={(evt) => { this.setState({userType: "SEEKER"})} } />
                            I am looking for a position
                          </Label>
                        </FormGroup>
                      </Form>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg="12" md="12">
                      <Label for="exampleEmail" style={{marginTop: "10px"}}>What is your current classification? (e.g. EC02 ...)</Label>
                      <Dropdown isOpen={this.state.classificationDropdown} toggle={this.toggleClassification}>
                        <DropdownToggle caret>
                          {this.state.classification}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={() => this.setState({classification: "EC01"})}>EC01</DropdownItem>
                          <DropdownItem onClick={() => this.setState({classification: "EC02"})}>EC02</DropdownItem>
                          <DropdownItem onClick={() => this.setState({classification: "EC03"})}>EC03</DropdownItem>
                          <DropdownItem onClick={() => this.setState({classification: "EC04"})}>EC04</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                  <Row style={{marginTop: "50px"}}>
                    <Col lg="12" md="12">
                      <Button style={{marginTop: "10px"}} color="primary" onClick={() => {
                        initializeUser({ variables: { 
                          gcID: this.props.user.profile.sub,
                          type: this.state.userType,
                          classification : this.state.classification
                        } });
                      }}>Submit</Button>
                      {loading && <Spinner />}
                      {error && <p>Error :( Please try again</p>}
                      {
                        data && this.redirect(data)
                      }
                    </Col>
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

export default OnBoarding;