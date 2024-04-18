export const REGISTER_USER = `
    mutation registerUser($user: UserInput!) {
        registerUser(user: $user) {
            token
        }
    }
`