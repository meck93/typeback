import { gql } from "apollo-server-express"

const eventTypeDefinition = gql`
  type Event {
    _id: ID!
    title: String!
    body: String!
    creationDate: String
    modificationDate: String
  }

  input EventInput {
    title: String
    body: String
  }

  extend type Query {
    getEvent(_id: ID!): Event
    getEvents: [Event!]!
  }

  extend type Mutation {
    createEvent(input: EventInput!): Event
    updateEvent(_id: ID!, input: EventInput!): Event
    deleteEvent(_id: ID!): Event
  }
`;

export { eventTypeDefinition };