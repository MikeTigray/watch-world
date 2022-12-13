const { gql } = require("@apollo/client");

export const QUERY_ALL_WATCHES = gql`
  query Watches {
    watches {
      brand
      image
      name
      price
      _id
    }
  }
`;
