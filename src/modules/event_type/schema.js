import { gql } from "apollo-server-core";

export const typeDef = gql`
    type EventType{
        id: Int!
        name: String!
        key: String!
    }

    extend type Query {
        eventTypes: [EventType!]!
    }
`;