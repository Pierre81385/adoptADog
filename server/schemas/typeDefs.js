//define the types, query entry points, and mutation entry points (test in GraphQL)
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
    dog: [Dog]!
  }

  type Dog {
    _id: ID
    name: String
    breed: String
    age: String
    size: String
    gender: Boolean
    user: [User]!
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    dogs: [Dog]!
    dog(dogId: ID!): Dog
    # Add query to find adopted dogs
  }

  type Mutation {
    # Set up mutations to handle creating a user or logging into a user and return Auth type
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    # Add a dog to a user
    #addDogToUser(userId: ID!, dog: Dog): User

    # Add a user to a dog
    #addUserToDog(dogId: ID!, user: User): Dog

    # Remove a dog from a user
    removeDog(dogId: ID!): Dog

    # Delete a user
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
