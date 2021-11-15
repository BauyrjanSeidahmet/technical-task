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

export const LOGIN_USER = ({email, password}) => {
    return `
        query {
            login(email: "${email}", password: "${password}") {
            userId
            email
            token
            }
        }
    `
}