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

  type User {
    _id: ID
    name: String
    age: Number
    email: String
    password: String
  }

  type Query {
    dogs: [Dog]
    dog(dogId: ID!): Dog
    users: [User]
    user(userId: ID!): User
  }
`;

module.exports = typeDefs;
