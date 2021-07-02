const { Dog, User } = require("../models");

const resolvers = {
  Query: {
    dogs: async () => {
      return Dog.find();
    },
    users: async () => {
      return User.fina();
    },
  },
};

module.exports = resolvers;
