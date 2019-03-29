import gql from "graphql-tag";

const GET_JOB_QUERY = gql`
    query GetJob($id: ID) {
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

const JOB_SEARCH_QUERY = gql`
  query Jobs {
    jobs {
      id
      name
      location
      department
    }
  }
`;

export {
  GET_JOB_QUERY,
  JOB_SEARCH_QUERY
};