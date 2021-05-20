import { GraphQLScalarType, Kind } from "graphql";

export const DateCustomType = new GraphQLScalarType({
    name: 'DateCustomType',
    description: 'Date and time type',
    serialize(value: Date) {
        return value.toISOString(); // Convert outgoing Date to ISO format string.
    },
    parseValue(value: string) {
        return new Date(value); // Convert incoming string to Date.
    },
    parseLiteral(literal) {
        if (literal.kind === Kind.STRING) {
            return new Date(literal.value); // Convert literal string to Date.
        }
        return null;
    }
});