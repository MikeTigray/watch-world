const { User, Watch } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      const users = await User.find({}).populate("wishlist");

      return users;
    },
    watches: async () => {
      const watches = await Watch.find({});

      return watches;
    },
  },
  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);
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

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
