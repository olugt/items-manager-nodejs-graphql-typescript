import { GraphQLObjectType, GraphQLString } from "graphql";
import { ServicesModelInterface } from "../../../../services/dist/interfaces/ServicesModelInterface";

export const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        healthCheck: {
            type: GraphQLString,
            resolve: (source, args, context: ServicesModelInterface, info) => {
                return "Server is running, from mutation. " + context.checkHealth();
            }
        }
    }
})