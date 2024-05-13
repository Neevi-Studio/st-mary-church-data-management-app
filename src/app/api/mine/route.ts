import { NextRequest, NextResponse } from "next/server";
import { AuthApi } from "@/Api/apis/auth-api";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { LoginDto } from "@/Api/models";
import { getErrorResponse } from "@/components/hooks/helpers";
import { UsersApi } from "@/Api";

export async function GET(req: NextRequest) {
    try {

        const result = await new UsersApi(AXIOS_CONFIG).getMyProfile();

        const response = new NextResponse(
            JSON.stringify({
                status: "success",
                result,
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

        return response;
    } catch (error) {
        // @ts-ignore
        return getErrorResponse(500, error.response?.data?.message);
    }
}
