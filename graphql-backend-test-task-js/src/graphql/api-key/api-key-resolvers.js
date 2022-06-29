import { addNewApiKey } from "../../services/api-key.service.js";

const apiKeyResolvers = {
  Mutation: {
    generateNewAPiKey: (_, { name }, { isAuthorized }) => {
      if (!isAuthorized) throw new ApolloError("Valid API-KEY Required");
      return addNewApiKey(name);
    },
  },
};

export default apiKeyResolvers;
