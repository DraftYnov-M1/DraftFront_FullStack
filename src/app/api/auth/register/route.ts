import { fetchGraphQl } from "@/services/fetchGraphql.api";
import { REGISTER_USER } from "@/graphql/mutations";
import { cookies } from "next/headers";

export async function POST(request: Request) {
	try {
		const cookiesStore = cookies();
		const body = await request.json();
		console.log(body);
		const data = await fetchGraphQl(REGISTER_USER, { user: body }, "");
		console.log(data);
		// set cookies
		if (data?.data?.registerUser?.token) {
			cookiesStore.set({
				name: "token",
				value: data.data.registerUser.token,
				path: "/",
				maxAge: 60 * 60 * 24 * 7,
				httpOnly: true,
			});
			return Response.json({
				success: true,
			});
		}
		return Response.json({
			success: false,
			message: "An error occurred",
		});
	} catch (err) {
		console.log(err);
		return Response.json({
			success: false,
			message: "An error occurred",
		});
	}
}