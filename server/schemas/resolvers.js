const { User, Watch } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async (root, args, context) => {
      const users = await User.find({}).populate("wishlist");
      console.log("from users: ", context.req.query);
      return users;
    },
    watches: async (a, b, c) => {
      const watches = await Watch.find({});

      return watches;
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log("token is :", token);
      return { user, token };
    },
    addWatchToWishlist: async (parent, { watchId, userId }) => {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $push: { wishlist: watchId },
        },
        { new: true }
      );

      return user;
    },
  },
};

module.exports = resolvers;
