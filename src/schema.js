const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  users(id: ID): [User]!
  user(id: ID, gcID: String): User
  jobs(id: ID): [Job]!
  job(id: ID, name: String): Job
  collaborativeRecommendations(gcID: String!): [Job]!
}

type Mutation {
  createUser(user: CreateUserInput!): User!
  deleteUser(id: ID!): Boolean!
  createJob(job: CreateJobInput!): Job!
  deleteJob(id: ID!): Boolean!
  initializeUser(user: InitializeUserInput!): User!
  viewJob(user: UserInput!, job: JobInput!): User!
}

type User {
  """User"""
  id: ID!
  gcID: String!
  createdAt: String!
  updatedAt: String!
  name: String!
  onBoarded: Boolean!
  classification: ClassificationEnum!
  type: UserTypeEnum!
  jobPostings: [Job]! 
  viewed: [Job]!
}

type Job {
  """User"""
  id: ID!
  createdAt: String!
  updatedAt: String!
  name: String!
  owner: User!
  viewedBy: [User]!
  department: DepartmentEnum
  classification: ClassificationEnum
  location: LocationEnum
}

input CreateUserInput {
  gcID: String!
  name: String!
  onBoarded: Boolean!
  classification: ClassificationEnum!
  type: UserTypeEnum!
}

input InitializeUserInput {
  gcID: String!
  onBoarded: Boolean!
  classification: ClassificationEnum!
  type: UserTypeEnum!
}

input UserInput {
  gcID: ID!
}

input JobInput {
  id: ID!
}

input CreateJobInput {
  name: String!
  owner: UserInput!
  department: DepartmentEnum!
  classification: ClassificationEnum!
  location: LocationEnum!
}

enum orderByEnum {
  createdAt_ASC
  createdAt_DESC
}

enum UserTypeEnum {
  UNDEFINED
  SEEKER
  RECRUITER
}

enum ClassificationEnum {
  UNDEFINED
  EC01
  EC02
  EC03
  EC04
}

enum DepartmentEnum {
  TBS
  DND
  PSPC
  OCHRO
}

enum LocationEnum {
  NCR
  ONTARIO
  QUEBEC
  OTHER
}
`

module.exports = typeDefs;