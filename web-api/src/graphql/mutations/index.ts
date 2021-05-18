import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { ServicesModelInterface } from "../../../../services/dist/interfaces/ServicesModelInterface";
import { credentialsInput, credentialsInputType } from '../inputs/credentials';
import { tokenDetailOutput, tokenDetailOutputType } from '../outputs/tokenDetail';

export const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        index: {
            type: GraphQLString,
            resolve: (source, args, context: ServicesModelInterface, info) => {
                return "Server is running, from mutation. " + context.checkHealth();
            }
        },
        login: {
            type: new GraphQLNonNull(tokenDetailOutput),
            args: {
                credentials: {
                    type: new GraphQLNonNull(credentialsInput)
                }
            },
            resolve: (source, _args, context, info): tokenDetailOutputType => {
                const args = _args as { credentials: credentialsInputType };

                return { token: "dummy token", emailAddress: args.credentials.emailAddress, expiryDatetime: new Date() }
            }
        }
    }
})