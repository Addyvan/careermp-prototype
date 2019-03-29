import React from "react";

import { JOB_SEARCH_QUERY } from "../../gql/job";
import JobSearch from "../search/jobs";
import { Query } from "react-apollo";

import { Spinner } from "reactstrap";

import SearchBar from "./SearchBar";

class Search extends React.Component {
  render() {
    return(
      <Query query={JOB_SEARCH_QUERY}>
        {
          ({ loading, error, data }) => {
            if (loading) return (<Spinner color="primary" />);
            if (error) { 
              
              return null;
            }
            if (data) {
              
              var jobSearch = new JobSearch(data);

              var searchIndex = jobSearch.nameIndex;
              var searchValues = jobSearch.nameSearchValues;

              
              return(
                <SearchBar
                  placeholder="Search by Name..."
                  section="desktop"
                  searchIndex={searchIndex}
                  searchValues={searchValues}
                 />
                 );
            } else {
              
              return(null);
            }
          }
        }
      </Query>
    );
  }
}

export default Search;