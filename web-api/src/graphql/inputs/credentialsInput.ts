import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

export type credentialsInputType = {
    emailAddress: string,
    password: string
}

export const credentialsInput = new GraphQLInputObjectType({
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