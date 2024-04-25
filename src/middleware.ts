import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { GET_ME } from "@/graphql/mutations";
import { fetchGraphQl } from "@/services/fetchGraphql.api";

export async function middleware(request: NextRequest) {
    const url = new URL(request.url);
    url.pathname = "/auth/login";
    // let cookie = request.cookies.get('token') || undefined;
    const cookiesStore = cookies();
    const token = cookiesStore.get('token') || undefined;
    console.log(token, "TOKEN FROM MIDDLEWARE");
    if (!token) {
        // verify the token valid 
        return NextResponse.redirect(url.toString());
    }
    else {
        const me = await fetchGraphQl(GET_ME, {}, `Bearer ${token.value}`);
        if (me?.data?.getMe) { 
            return NextResponse.next();
        }
        else {
            return NextResponse.redirect(url.toString());
        }
    }
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/account/:path*",
};
