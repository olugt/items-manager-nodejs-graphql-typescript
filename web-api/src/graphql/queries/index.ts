import { GraphQLObjectType, GraphQLString } from "graphql";
import { ServicesModelInterface } from "../../../../services/dist/interfaces/ServicesModelInterface";

export const query = new GraphQLObjectType({
    name: "Query",
    fields: {
        healthCheck: {
            type: GraphQLString,
            resolve: (source, args, context: ServicesModelInterface, info) => {
                return "Server is running, from query. " + context.checkHealth();
            }
        }
    }
})