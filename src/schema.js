const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
    users(id: ID): [User]!
    user(id: ID, name: String): User
    jobs(id: ID): [Job]!
    job(id: ID, name: String): Job
}

type Mutation {
    createUser(user: CreateUserInput!): User!
    deleteUser(id: ID!): Boolean!
    createJob(job: CreateJobInput!): Job!
    deleteJob(id: ID!): Boolean!
}

type User {
    """User"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    viewed: [Job]!
}

type Job {
    """User"""
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    viewedBy: [User]!
}

input CreateUserInput {
    name: String!
}

input CreateJobInput {
    name: String!
}

enum orderByEnum {
    createdAt_ASC
    createdAt_DESC
}
`

module.exports = typeDefs;