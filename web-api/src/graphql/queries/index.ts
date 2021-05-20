import { GraphQLObjectType, GraphQLString } from "graphql";
import { ServicesModelInterface } from "../../../../services";

export const Query = new GraphQLObjectType({
    name: "Query",
    fields: {
        index: {
            type: GraphQLString,
            resolve: (source, args, context: ServicesModelInterface, info) => {
                return "Server is running, from query. " + context.checkHealth();
            }
        }
    }
})