export const fetchGraphQl = async (resolvers: string, variables, token: string) => { 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token || 'null'
        },
        body: JSON.stringify({
            query: resolvers,
            variables: variables
        }),
    });

    return res.json();
}