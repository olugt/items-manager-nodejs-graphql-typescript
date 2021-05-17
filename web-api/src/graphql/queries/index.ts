import { GraphQLObjectType, GraphQLString } from "graphql";

export const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        getHello: {
            type: GraphQLString,
            resolve: (source, args, { sample }, info) => {
                return "Hello there. " + sample;
            }
        }
    }
})