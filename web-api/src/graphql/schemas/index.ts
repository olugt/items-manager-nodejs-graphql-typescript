import { GraphQLSchema } from "graphql";
import { mutation } from "../mutations";
import { query } from "../queries";

export const schema = new GraphQLSchema({
    query: query,
    mutation: mutation
})