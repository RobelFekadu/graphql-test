import { gql } from "apollo-server-express";

const apiKeyType = gql`
  type ApiKey {
    id: ID!
    name: String!
    value: String!
  }

  type Mutation {
    generateNewAPiKey(name: String!): ApiKey!
  }
`;

export default apiKeyType;
