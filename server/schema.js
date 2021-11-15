const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type User {
        id: ID
        email: String
        password: String
        age: Int
    }
    type AuthData {
        userId: ID!
        email: String!
        token: String!
        tokenExpiration: Int!
    }
    input UserInput {
        id: ID
        email: String!
        password: String!
        age: Int!
    }  
  
    type Query {
        getAllUsers: [User]
        getUser(id: ID): User
        login(email: String!, password: String!): AuthData!
    }
    type Mutation {
        createUser(input: UserInput): User
    }
`)   

module.exports = schema