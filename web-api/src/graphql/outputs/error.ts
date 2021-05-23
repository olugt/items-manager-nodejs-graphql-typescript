import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql"
import { ErrorDataModel, ErrorModel } from "../../../../common";

export type ErrorOutputType = {
    kind: "ErrorOutputType",
    error: ErrorModel<ErrorDataModel[] | null>
}

export const ErrorOutput = new GraphQLObjectType({
    name: "ErrorOutput",
    fields: {
        error: {
            type: new GraphQLNonNull(new GraphQLObjectType({
                name: "ErrorInfoOutput",
                fields: {
                    message: {
                        type: new GraphQLNonNull(GraphQLString)
                    },
                    data: {
                        type: new GraphQLList(new GraphQLObjectType({
                            name: "ErrorDataOutput",
                            fields: () => ({
                                key: {
                                    type: new GraphQLNonNull(GraphQLString)
                                },
                                value: {
                                    type: new GraphQLNonNull(new GraphQLList(GraphQLString))
                                }
                            })
                        }))
                    },
                    code: {
                        type: new GraphQLNonNull(GraphQLString)
                    }
                }
            }))
        }
    }
})