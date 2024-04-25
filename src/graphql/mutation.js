export const REGISTER_USER = `
    mutation RegisterUser($user: UserInput!) {
        registerUser(user: $user) {
        token
        }
    }
`

export const GET_USER = `
    mutation GetMe{
        getMe{
            token
        }
    }
`