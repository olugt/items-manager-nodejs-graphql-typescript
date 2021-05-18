import { GraphQLObjectType, GraphQLString } from 'graphql';
import DateScalarType from '../custom-types/DateScalarType';

export type tokenDetailOutputType = {
    token: string,
    expiryDatetime: Date,
    emailAddress: string
}

export const tokenDetailOutput = new GraphQLObjectType({
    name: "TokenDetailOutput",
    fields: () => ({
        token: {
            type: GraphQLString
        },
        expiryDatetime: {
            type: DateScalarType
        },
        emailAddress: {
            type: GraphQLString
        }
    })
});