// DAL = Data access layer
'use server';
import { cache } from "react";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import { GET_ME } from "@/graphql/mutations";
import { cookies } from "next/headers"

export const getUser = cache(async () => {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get('token') || undefined;
        if (token) {
            const me = await fetchGraphQl(GET_ME, {}, `Bearer ${token.value}`);
            if (me?.data?.getMe) {
                return me.data.getMe;
            }
            else {
                return null;
            }
        }
    }
    catch (err) {
        console.log(err);
    }
});