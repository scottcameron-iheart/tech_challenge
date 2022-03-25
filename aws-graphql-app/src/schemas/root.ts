import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    healthcheck: Boolean
  }
`;

export const resolvers = {
  Query: {
    healthcheck: () => true
  }
};