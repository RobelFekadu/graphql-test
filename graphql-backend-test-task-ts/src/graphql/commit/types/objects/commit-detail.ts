import { Field, ObjectType } from "type-graphql";
import { Author } from "./author";

@ObjectType()
export default class CommitDetail {
  @Field()
  author!: Author;

  @Field()
  message!: string;
}
