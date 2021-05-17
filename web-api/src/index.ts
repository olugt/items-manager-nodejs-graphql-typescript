import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './graphql/schemas/index';

const app = express();

app.use("/graphql", graphqlHTTP({
    schema: schema,
    context: { sample: "sample context" },
    graphiql: true
}));

app.listen(3001, () => console.log("App now running."));