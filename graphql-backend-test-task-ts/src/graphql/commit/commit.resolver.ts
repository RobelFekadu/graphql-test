import { ApolloError } from "apollo-server-core";
import { Args, Ctx, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Context } from "../interfaces/context";
import GetPaginatedCommitsArgs from "./types/args/getPaginatedCommitsArgs";
import Commit from "./types/objects/commit";

@Service()
@Resolver()
export default class CommitResolver {
  @Query(() => [Commit], { description: "Commit List" })
  async getAllCommits(
    @Args() { page, per_page }: GetPaginatedCommitsArgs,
    @Ctx() ctx: Context
  ): Promise<Commit[]> {
    if (!ctx.isAuthorized) throw new ApolloError("Valid API-KEY Required");
    return ctx.dataSources?.githubAPI.getFacebookReactCommits(page, per_page);
  }
}
