import React from "react";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import PropTypes from "prop-types";

import { Spinner } from "reactstrap";

const JOB_QUERY = gql`
    query GetJob($id: ID!) {
      job( id: $id ) {
        id
        createdAt
        updatedAt
        name
        viewedBy {
          id
        }
        department
        classification
        location
      }
    }
`;

class JobSnapshotDataProvider extends React.Component {
    render() {
      const { children } = this.props;
      console.log(this.props.id);
      return(
        <Query query={JOB_QUERY} variables={{id: this.props.id }}>
          {
            ({ loading, error, data }) => {
              if (loading) return (<Spinner color="primary" />);
              if (error) { console.log(error); return; }

              if (data) {
                if (data.job) {
                  const childrenWithProps = React.Children.map(children, child =>
                    React.cloneElement(child, { data: data })
                  );
                    
                  return <div>{childrenWithProps}</div>
                } else {
                  return("query error");
                }
              }
            }
          }
        </Query>
      );
    }
}

JobSnapshotDataProvider.propTypes = {
  id: PropTypes.string.isRequired
}

export default JobSnapshotDataProvider;