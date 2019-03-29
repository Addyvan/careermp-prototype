import React from "react";
import {Query} from "react-apollo";

import PropTypes from "prop-types";

import { Spinner } from "reactstrap";

import {
  GET_JOB_QUERY
} from "../../gql/job";

class JobFullDataProvider extends React.Component {
    render() {
        const { children } = this.props;

        return(
            <Query query={GET_JOB_QUERY} variables={{id: this.props.id}}>
                {
                    ({ loading, error, data }) => {
                        if (loading) return (<Spinner color="primary" />);
                        if (error) { console.log(error); return; }

                        if (data) {
                            const childrenWithProps = React.Children.map(children, child =>
                                React.cloneElement(child, { data: data })
                              );
                          
                            return <div>{childrenWithProps}</div>
                        }
                    }
                }
            </Query>
        );
    }
}

JobFullDataProvider.propTypes = {
    id: PropTypes.string.isRequired
}

export default JobFullDataProvider;