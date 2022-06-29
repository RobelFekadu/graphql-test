import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Author {
  @Field()
  name!: string;

  @Field()
  email!: string;

  @Field()
  date!: string;
}
