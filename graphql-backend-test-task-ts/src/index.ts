import "reflect-metadata";
import express from "express";
import http from "http";
import apolloServer from "./graphql/index";
import "./database/data-source";

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = await apolloServer();

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer();
