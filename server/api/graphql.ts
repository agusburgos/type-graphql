import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
buildSchemaSync({
  resolvers: ["../graphql/**/*.resolver.*"],
  emitSchemaFile: true
});
