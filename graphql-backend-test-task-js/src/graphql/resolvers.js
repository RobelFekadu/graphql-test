import apiKeyResolvers from "./api-key/api-key-resolvers.js";
import commitResolvers from "./commit/commit-resolvers.js";

const helloWorldResolver = {
  Query: {
    helloWorld: () => {
      return "Hello Wolrd";
    },
  },
};

export default [commitResolvers, apiKeyResolvers, helloWorldResolver];
