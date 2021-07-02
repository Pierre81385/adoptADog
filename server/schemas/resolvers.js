const { Dog } = require("../models");

const resolvers = {
  Query: {
    dogs: async () => {
      return Dog.find();
    },
  },
};

module.exports = resolvers;
