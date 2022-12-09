const { User, Watch } = require("../models");

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
};

module.exports = resolvers;
