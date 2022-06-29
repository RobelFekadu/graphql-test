import commitType from "./commit/commit-types.js";
import apiKeyType from "./api-key/api-key-types.js";
import { gql } from "apollo-server-express";

const helloWorldType = gql`
  type Query {
    helloWorld: String
  }
`;
export default [commitType, apiKeyType, helloWorldType];
