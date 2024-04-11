export const fetchGraphQl = async (resolvers: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/graphql`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: resolvers
        }),
    });

    return res.json();
}