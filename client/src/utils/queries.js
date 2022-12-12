const { gql } = require("@apollo/client");

export const GET_WATCHES = gql`
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
