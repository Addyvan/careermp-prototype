import React, { Component } from 'react';
import { Redirect } from 'react-router';

import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Mutation } from "react-apollo";

import { Spinner } from "reactstrap";

import {
  GET_USER_QUERY
} from "../gql/user";

const CREATE_USER = gql`
  mutation CreateUser($gcID: String!, $name: String!) {
    createUser(
      user: {
        gcID: $gcID
        name: $name
        onBoarded: false
        classification: UNDEFINED
        type: UNDEFINED
      }
    ) {
      id
    }
  }
`;

class Home extends Component {
  componentDidMount() {
    document.title = 'Home Page';
  }

  render() {
    if (this.props.user) {
      return(
        <Query query={GET_USER_QUERY} variables={{gcID: this.props.user.profile.sub}}>
          {
            ({ loading, error, data }) => {
              if (loading) return (<Spinner color="primary" />);
              if (error) { console.log(error); return; }

              if (data) {
                if (data.user) {
                  if (data.user.onBoarded)
                    return (<Redirect to="/userfeed"/>);
                  else 
                    return(<Redirect to="/onboarding"/>);
                } else {
                  return (
                    <Mutation mutation={CREATE_USER}>
                      {
                        (createUser, { data }) => {
                          createUser({
                            variables: {
                              gcID: this.props.user.profile.sub,
                              name: this.props.user.profile.name
                            }
                          });
                          return(<Redirect to="/onboarding"/>);
                        }
                      }
                    </Mutation>
                  );
                }
              }
            }
          }
        </Query>
        
      );
    } else {
      return (
        <div>
          <h1>Please Log in</h1>
        </div>
      );
    }
  }
}

export default Home;