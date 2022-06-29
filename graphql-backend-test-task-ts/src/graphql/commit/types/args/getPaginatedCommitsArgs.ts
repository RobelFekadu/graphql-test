import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
export default class GetPaginatedCommitsArgs {
  @Field((type) => Int, { nullable: true, defaultValue: 1 })
  page?: number;

  @Field((type) => Int, { nullable: true, defaultValue: 30 })
  per_page?: number;
}
