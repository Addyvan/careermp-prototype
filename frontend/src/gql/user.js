import gql from "graphql-tag";

const GET_USER_QUERY = gql`
    query GetUser($gcID: String) {
        user( gcID: $gcID ) {
          id
          onBoarded
          type
        }
    }
`;

export {
  GET_USER_QUERY
};