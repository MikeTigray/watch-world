const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Watch {
    _id: ID
    name: String
    price: Float
    brand: String
    image: String
  }
  type User {
    _id: ID
    fullName: String
    email: String
    password: String
    wishlist: [ID]
  }

  type Query {
    users: [User]
    watches: [Watch]
  }
  type Mutation {
    createUser(fullName: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
