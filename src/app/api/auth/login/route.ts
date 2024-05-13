import { AuthApi, LoginDto } from "@/Api";
import { AXIOS_CONFIG } from "@/Api/ApiWrapper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = (await req.json()) as LoginDto;
        const password = req.headers.get("password") || ""

        const result = await new AuthApi(AXIOS_CONFIG).signinToDashboard({ email: data.email, password });

        const token = result.data.authToken
        if (!token) throw new Error("Token not found");
        if (!result.data.userData) throw new Error("User not found");

        const response = new NextResponse(
            JSON.stringify({
                status: "success",
                token,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );


        await Promise.all([
            response.cookies.set({
                name: "dashToken",
                value: token,
                // httpOnly: true,
                // path: "/",
                // secure: process.env.NODE_ENV !== "development",
                // maxAge: 3600,
            }),
            response.cookies.set({
                name: "dash-logged-in",
                value: "true",
                // maxAge: 3600,
            }),

        ]);

        return response;
    } catch (error: any) {
        throw new Error(error);
    }
}
