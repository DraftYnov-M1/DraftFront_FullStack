import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import { LOGIN_USER } from "@/graphql/mutations";

export async function POST(request : Request) {
    try {
        const body = await request.json();
        console.log(body);
        const data = await fetchGraphQl(LOGIN_USER, {user:body}, "");
        console.log(data);

        if (data?.data?.loginUser?.token) {
            cookies().set({
                name : "token", 
                value : data.data.loginUser.token,
                maxAge : 60 * 60 * 24 * 7, // 1 week
                path : "/",
                httpOnly : true,
                // secure : true, // uncomment for production only - https protocol
            });

            return NextResponse.json({
                success: true,
                message: "Login success",
            });
        }
        return NextResponse.json({
            success:false,
            message: "Login failed",
        });

    } catch (e) {
        console.error("Unabled to login, an error occurred: ", e);
        return NextResponse.json({
            success: false,
            message: "Unabled to login, an error occurred: " + e
        });
    }
};