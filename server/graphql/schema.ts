import "reflect-metadata";
import { Field, InputType, ObjectType } from "type-graphql";

@InputType()
export class PersonInput {
  @Field()
  name: string;
}

@ObjectType()
export class Person {
  @Field((type) => String)
  name?: string;

  @Field((type) => [String], { nullable: "itemsAndList" })
  tags?: string[];
}
