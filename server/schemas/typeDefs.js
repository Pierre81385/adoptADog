//define the types, query entry points, and mutation entry points (test in GraphQL)
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    # There is now a field to store the user's password
    password: String
  }

  type Dog {
    _id: ID
    name: String
    breed: String
    age: Integer
    size: Integer
    gender: Boolean
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: [User]!
    user(userId: ID!): User
    dog: [Dog]!
    dog(dogId: ID!): Dog
    # Add query to find adopted dogs
  }

  type Mutation {
    # Set up mutations to handle creating a profile or logging into a profile and return Auth type
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    # Add a dog to a user
    addDog(profileId: ID!, skill: String!): Profile

    # Remove a dog from a user
    removeDog(dogId: ID!): Dog

    # Delete a user
    removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
