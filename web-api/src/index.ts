import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from './graphql/schemas/index';
import cors from "cors";
import servicesModel from "../../services";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema: schema,
    context: servicesModel,
    graphiql: true
}));

app.listen(Number.parseInt(<string>process.env.PORT), () => console.log("App now running."));