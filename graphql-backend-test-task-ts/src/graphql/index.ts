import path from "path";
import { ApolloServer } from "apollo-server-express";
import { BuildSchemaOptions, buildSchema } from "type-graphql";
import Container from "typedi";
import { checkAuthorization } from "../auth/auth";
import GithubAPI from "../services/github-rest-api";
import CommitResolver from "./commit/commit.resolver";
import HelloResolver from "./hello/hello.resolver";
import ApiKeyResolver from "./api-key/api-key.resolver";

const apolloServer = async () => {
  const apolloSchemaOptions: BuildSchemaOptions = {
    resolvers: [CommitResolver, HelloResolver, ApiKeyResolver],
    validate: false,
    container: Container,
  };

  const apolloSchema = await buildSchema(apolloSchemaOptions);

  return new ApolloServer({
    schema: apolloSchema,
    introspection: true,
    context: async ({ req }) => {
      const isAuthorized = await checkAuthorization(req.headers.authorization);
      return { isAuthorized };
    },
    dataSources: () => {
      return {
        githubAPI: new GithubAPI(),
      };
    },
  });
};

export default apolloServer;
