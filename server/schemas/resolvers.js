//define the resolvers and mutations to get and manipulate data (test in GraphQL)
const { User, Dog } = require("../models");

const resolvers = {
  Query: {
    //find all users
    users: async () => {
      return User.find();
    },

    //find one user
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    //find all dogs
    dogs: async () => {
      return Dog.find();
    },

    //find one dog
    dog: async (parent, { dogId }) => {
      return Dog.findOne({ _id: dogId });
    },
  },

  Mutation: {
    //add user
    addUser: async (parent, { name, email, password }) => {
      const profile = User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },

    //login user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};
