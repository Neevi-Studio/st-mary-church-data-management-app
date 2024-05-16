
import { NextRequest, NextResponse } from 'next/server';
import { AuthApi } from '@/Api/apis/auth-api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { LoginDto } from '@/Api/models';
import { UserApi } from '@/Api';
import cookie from 'cookie';

export async function GET(req: NextRequest) {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const tokenFroMCoockies = cookies['saintmary-dashToken'];
    try {

        const result = await new UserApi(AXIOS_CONFIG).getPendingFamiliesAndUsers({
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







