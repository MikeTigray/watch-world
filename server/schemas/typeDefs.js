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
    wishlist: [Watch]
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    watches: [Watch]
  }
  type Mutation {
    createUser(fullName: String!, email: String!, password: String!): Auth
    addWatchToWishlist(watchId: ID!, userId: ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
