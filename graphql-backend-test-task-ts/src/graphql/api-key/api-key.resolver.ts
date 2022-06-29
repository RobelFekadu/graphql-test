import { ApolloError } from "apollo-server-core";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { Service } from "typedi";
import ApiKeyService from "../../services/api-key.service";
import { Context } from "../interfaces/context";
import { ApiKey } from "./types/objects/api-key";

@Service()
@Resolver()
export default class ApiKeyResolver {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  @Mutation(() => ApiKey, { description: "API Key" })
  async generateNewAPiKey(
    @Arg("name") name: string,
    @Ctx() ctx: Context
  ): Promise<ApiKey> {
    if (!ctx.isAuthorized) throw new ApolloError("Valid API-KEY Required");
    return this.apiKeyService.addNewApiKey(name);
  }
}
