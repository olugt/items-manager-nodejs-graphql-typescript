import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { CredentialsInput, CredentialsInputType } from '../inputs/credentials';
import { TokenDetailOrErrorOutput, TokenDetailOrErrorOutputType } from '../outputs/tokenDetail';
import { ServicesModelInterface } from "../../../../services";
import { ErrorDataModel, ErrorModel, ERROR_CODES } from "../../../../common";

export const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        index: {
            type: GraphQLString,
            resolve: (source, args, context: ServicesModelInterface, info) => {
                return "Server is running, from mutation. " + context.checkHealth();
            }
        },
        login: {
            type: new GraphQLNonNull(TokenDetailOrErrorOutput),
            args: {
                credentials: {
                    type: new GraphQLNonNull(CredentialsInput)
                }
            },
            resolve: (source, _args, context, info): TokenDetailOrErrorOutputType => {
                const args = _args as { credentials: CredentialsInputType };

                if (args.credentials.emailAddress === "bla@bla.com") {
                    return {kind: "ErrorOutputType", error: new ErrorModel<ErrorDataModel[]>("kkkkk", [new ErrorDataModel("ds", ["dsd", "ppp"]), new ErrorDataModel("sfsa", ["jkl", "mjk"])], ERROR_CODES.validationError)}
                }

                return { kind: "TokenDetailOutputType", token: "dummy token", emailAddress: args.credentials.emailAddress, expiryDatetime: new Date("2022-01-23T01:00:00Z") }
            }
        }
    }
})