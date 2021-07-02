const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Dog {
    _id: ID
    name: String
    breed: String
    age: Int
    size: String
    gender: Boolean
  }

  type Query {
    dogs: [Dog]
    dog(dogId: ID!): Dog
  }
`;

module.exports = typeDefs;
