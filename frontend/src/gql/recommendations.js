import gql from "graphql-tag";

const GET_COLLABORATIVE_RECOMMENDATIONS = gql`
  query GetRecommendations($gcID: String!) {
    collaborativeRecommendations( gcID: $gcID ) {
      id
    }
  }
`;

export {
  GET_COLLABORATIVE_RECOMMENDATIONS
};