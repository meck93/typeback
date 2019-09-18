import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";

import resolvers from "./resolvers";
import typeDefs from "./schema";

// create the express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get("/", (request, response) => {
    response.send("Hello world!");
});

// setup apollo express middleware
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.applyMiddleware({ app });

// start the Express server
app.listen(app.get("port"), () => {
    console.log(`server started at http://localhost:${app.get("port")}. mode: ${app.get("env")}. endpoint: ${server.graphqlPath}`);
});