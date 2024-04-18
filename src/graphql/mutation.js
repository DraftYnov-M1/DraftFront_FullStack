export const REGISTER_USER = `
    mutation RegisterUser($user: UserInput!) {
        registerUser(user: $user) {
        token
        }
    }
`