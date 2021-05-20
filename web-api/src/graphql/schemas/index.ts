import { GraphQLSchema } from "graphql";
import { Mutation } from "../mutations";
import { Query } from "../queries";

export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
})