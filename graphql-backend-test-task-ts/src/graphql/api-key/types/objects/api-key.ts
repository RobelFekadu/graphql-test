import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export class ApiKey {
  @Field(() => Int)
  id!: number;

  @Field()
  name!: string;

  @Field()
  value!: string;
}
