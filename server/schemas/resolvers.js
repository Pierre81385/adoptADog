const { Dog } = require("../models");
const { User } = require("../models");

const resolvers = {
  Query: {
    dogs: async () => {
      return Dog.find();
    },
    // users: async () => {
    //   return User.find();
    // },
  },
};

module.exports = resolvers;
