import { ApolloError } from "apollo-server-express";
const commitResolvers = {
  Query: {
    getAllCommits: (_, args, { dataSources, isAuthorized }) => {
      if (!isAuthorized) throw new ApolloError("Valid API-KEY Required");
      return dataSources.githubAPI.getFacebookReactCommits(
        args.page,
        args.per_page
      );
    },
  },
};

export default commitResolvers;
