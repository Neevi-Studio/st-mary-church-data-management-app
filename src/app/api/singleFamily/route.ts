import { ConfirmFamilyDTO, FamiliesApi, UserApi } from "@/Api";
import { AXIOS_CONFIG } from "@/Api/wrapper";
import { NextRequest, NextResponse } from "next/server";
import cookie from 'cookie';

export async function PATCH(req: NextRequest) {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const tokenFroMCoockies = cookies['saintmary-dashToken'];
    try {
        const familyData = (await req.json());

        const result = await new FamiliesApi(AXIOS_CONFIG).updateFamily(
            familyData.body, familyData.id,
            {
                headers: {
                    Authorization: `Bearer ${tokenFroMCoockies}`
                }
            }
        )

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
