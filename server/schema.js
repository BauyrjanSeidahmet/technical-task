const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type User {
        id: ID
        email: String
        password: String
        age: Int
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
    }
`)   

module.exports = schema