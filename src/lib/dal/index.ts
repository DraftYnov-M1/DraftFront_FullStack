// DAL = Data Access Layer
"use server";
import { cache } from 'react';
import { fetchGraphQl } from '@/services/fetchGraphql.api';
import { GET_ME } from '@/graphql/mutations';
import { cookies } from 'next/headers';

export const getUser = cache(async () => {
    try {
        const token = cookies().get('token' || undefined);

        if (token) {
            const me = await fetchGraphQl(GET_ME, {}, `Bearer ${token.value}`);
            return me?.data?.getMe;
        } else {
            return null;
        }

    } catch (e) {
        console.error("Unabled to get user, an error occurred: ", e);
        return null;
    }
});