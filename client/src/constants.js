export const GET_USERS_QUERY = `
    query {
        getAllUsers {
        id, email, age
        }
    }
`

export const CREATE_USER = ({email, password, age}) => {
    return `
        mutation {
            createUser(input: 
                {
                    email: "${email}"
                    password: "${password}"
                    age: ${age}
                  }
            ) {
            email, password, age
            }
        }
    `
}