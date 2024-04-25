import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
    const url = new URL(request.url);
    url.pathname = "/auth/login";
    let cookie = request.cookies.get('token') || undefined;
    if (!cookie) {
        // verify the token valid 
        return NextResponse.redirect(url.toString());
    }
    else {
        return NextResponse.next();
    }
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/account/:path*",
};
