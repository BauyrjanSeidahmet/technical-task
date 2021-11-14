export const GET_USERS_QUERY = `
    query {
        getAllUsers {
        id, email, age
        }
    }
`

export const CREATE_USER = (userData) => {
    return `
        mutation {
            createUser(input: {
                ${userData}
            }) {
            email, password, age
            }
        }
    `
}