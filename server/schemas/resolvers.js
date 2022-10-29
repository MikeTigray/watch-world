const { User, Watch } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      User.find({});
    },
    watches: async () => {
      Watch.find({});
    },
  },
};

module.exports = resolvers;
