import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './graphql/schemas/index';
import cors from "cors";
import servicesModel from "../../services";
const app = express();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: schema,
    context: servicesModel,
    graphiql: true
}));

app.listen(3001, () => console.log("App now running."));