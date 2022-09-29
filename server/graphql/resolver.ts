import "reflect-metadata";
import {
  Resolver,
  Query,
  Arg,
  Int,
  Mutation,
  FieldResolver,
  Root,
  Args
} from "type-graphql";

import type { PersonInput } from "./schema";
import { Person } from "./schema";

@Resolver()
export default class PersonResolver {
  @Query((returns) => Person)
  person(@Arg("personInput") personInput: PersonInput) {
    return {
      name: "Phil Xu",
      tags: ["Developer", "China"]
    };
  }
}
