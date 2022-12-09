const { User, Watch } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({});
      return users;
    },
    watches: async () => {
      const watches = await Watch.find({});
      return watches;
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
  },
};

module.exports = resolvers;
