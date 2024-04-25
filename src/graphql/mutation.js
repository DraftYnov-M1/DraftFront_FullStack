export const REGISTER_USER = `
    mutation RegisterUser($user: UserInput!) {
        registerUser(user: $user) {
            token
        }
    }
`

export const LOGIN_USER = `
    mutation LoginUser($user: UserInput!) {
        loginUser(user: $user) {
            token
        }
    }
`

export const GET_ME = `
    mutation GetMe{
        getMe {
            token
        }
    }
`

