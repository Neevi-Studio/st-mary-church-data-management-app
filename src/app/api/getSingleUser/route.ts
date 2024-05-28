
import { NextRequest, NextResponse } from 'next/server';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { UserApi } from '@/Api';
import cookie from 'cookie';

export async function POST(req: NextRequest) {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const tokenFroMCoockies = cookies['saintmary-dashToken'];
    try {
        const userId = (await req.json()) as string;

        const result = await new UserApi(AXIOS_CONFIG).getSingleUser(userId, {
            headers: {
                Authorization: `Bearer ${tokenFroMCoockies}`
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







