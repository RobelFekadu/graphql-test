import { Query, Resolver } from "type-graphql";
import { Service } from "typedi";

@Service()
@Resolver()
export default class HelloResolver {
  @Query(() => String, { description: "Hello :)" })
  async helloWorld(): Promise<string> {
    return "Hello World";
  }
}
