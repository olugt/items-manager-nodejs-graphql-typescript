import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type CredentialsInputType = {
    emailAddress: string,
    password: string
}

export const CredentialsInput = new GraphQLInputObjectType({
    name: "CredentialsInput",
    fields: () => ({
        emailAddress: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString)
        }
    })
});