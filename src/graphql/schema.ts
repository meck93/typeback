import { gql } from "apollo-server-express";
import { eventTypeDefinition } from "./event"

const baseTypeDefintions = gql`
  type Query {
    testMessage: String!
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }`;

export { baseTypeDefintions, eventTypeDefinition };

