export const REGISTER_USER = `
    mutation registerUser($user: UserInput!) {
        registerUser(user: $user) {
            token
        }
    }
`

export const GET_ME = `
    mutation GetMe{
        getMe{
            token
        }
    }
`
