import { NextRequest, NextResponse } from "next/server";
import { AuthApi } from "@/Api/apis/auth-api";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { LoginDto } from "@/Api/models";
import { getErrorResponse } from "@/components/hooks/helpers";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = (await req.json()) as LoginDto;

    // Calling the signin method from AuthApi
    const result = await new AuthApi(AXIOS_CONFIG).signin(data);
    const token = result.data.authToken;

    // Checking if token or userData is missing in the response
    if (!token || !result.data.userData) {
      throw new Error("Token or user data not found");
    }

    // Creating a success response with token
    const response = new NextResponse(
      JSON.stringify({
        status: "success",
        data: result.data,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

    // Setting cookies
    await Promise.all([
      response.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 3600,
      }),
      response.cookies.set({
        name: "loggedIn",
        value: "true",
        httpOnly: true,
        path: "/",
        maxAge: 3600,
        secure: process.env.NODE_ENV === "production" ? true : false,
      }),
    ]);

    return response;
  } catch (error) {
    console.log(error)
    // @ts-ignore
    return getErrorResponse(500, error.response?.data?.message);
  }
}
