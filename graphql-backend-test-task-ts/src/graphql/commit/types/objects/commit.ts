import { Field, ObjectType } from "type-graphql";
import CommitDetail from "./commit-detail";

@ObjectType()
export default class Commit {
  @Field()
  sha!: string;

  @Field()
  html_url!: string;

  @Field()
  commit!: CommitDetail;
}
