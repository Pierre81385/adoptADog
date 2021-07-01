import { gql } from "@apollo/client";

export const QUERY_DOGS = gql`
  query allDogs {
    dogs {
      _id
      name
      breed
      age
      size
      gender
    }
  }
`;

export const QUERY_SINGLE_DOG = gql`
  query singleDog($dogId: ID!) {
    dog(dogId: $dogId) {
      _id
      name
      breed
      age
      size
      gender
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      email
      dog
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      email
      dog
    }
  }
`;