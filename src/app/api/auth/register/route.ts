import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import { REGISTER_USER } from "@/graphql/mutations";

export async function POST(request : Request) {
    try {
        const body = await request.json();
        console.log(body);
        const data = await fetchGraphQl(REGISTER_USER, {user:body}, "");
        console.log(data);
        
        if(data?.data?.registerUser?.token){
            cookies().set("token", data.data.registerUser.token);
            return NextResponse.json({
                success: true,
                message: "Register success",
            });
        }
        return NextResponse.json({
            success:false,
            message: "Register failed",
        });

    } catch (e) {
        console.error("Unabled to register, an error occurred: ", e);
        return NextResponse.json({ 
            success: false,
            message: "Unabled to register, an error occurred: " + e
        });
    }
};