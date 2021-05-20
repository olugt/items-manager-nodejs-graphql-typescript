import { GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLUnionType } from 'graphql';
import { DateCustomType } from '../custom-types/Date';
import { ErrorOutput, ErrorOutputType } from './error';

export type TokenDetailOutputType = {
    kind: "TokenDetailOutputType",
    token: string,
    expiryDatetime: Date,
    emailAddress: string
}

export const TokenDetailOutput = new GraphQLObjectType({
    name: "TokenDetailOutput",
    fields: () => ({
        token: {
            type: new GraphQLNonNull(GraphQLString)
        },
        expiryDatetime: {
            type: new GraphQLNonNull(DateCustomType)
        },
        emailAddress: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});

export type TokenDetailOrErrorOutputType = ErrorOutputType | TokenDetailOutputType;

export const TokenDetailOrErrorOutput = new GraphQLUnionType({
    name: "TokenDetailOrErrorOutput",
    types: [ErrorOutput, TokenDetailOutput],
    resolveType: (value) => {
        if ((value as TokenDetailOutputType).kind === "TokenDetailOutputType")
            return TokenDetailOutput;
        else if ((value as ErrorOutputType).kind === "ErrorOutputType")
            return ErrorOutput;
        else
            throw new Error("Unresolved output.")
    }
});