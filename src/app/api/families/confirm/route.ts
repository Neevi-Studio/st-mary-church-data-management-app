import { AuthApi, ConfirmFamilyDTO, GetPendingUsers, LoginDto, UserApi } from "@/Api";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = (await req.json()) as ConfirmFamilyDTO;

        const tokenFroMCoockies = req.cookies.get('saintmary-dashToken');

        const result = await new UserApi(AXIOS_CONFIG).confirmFamily(data, {
            headers: {
                Authorization: `Bearer ${tokenFroMCoockies?.value}`
            }
        });


        const response = new NextResponse(
            JSON.stringify({
                status: "success",
                result: result?.data || [],
            }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );

        return response;
    } catch (error: any) {
        throw new Error(error);
    }
}
