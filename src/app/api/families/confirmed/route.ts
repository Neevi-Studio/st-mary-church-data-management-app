
import { NextRequest, NextResponse } from 'next/server';
import { AuthApi } from '@/Api/apis/auth-api';
import { AXIOS_CONFIG } from '@/Api/wrapper';
import { LoginDto } from '@/Api/models';
import { FamiliesApi, UserApi } from '@/Api';
import cookie from 'cookie';

export async function GET(req: NextRequest) {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const tokenFroMCoockies = cookies['saintmary-dashToken'];
    try {

        const result = await new FamiliesApi(AXIOS_CONFIG).getAllFamilies({
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







export async function POST(req: NextRequest) {

    const cookies = cookie.parse(req.headers.get('Cookie') || '');
    const tokenFroMCoockies = cookies['saintmary-dashToken'];
    try {

        const familyId = (await req.json()) as string;

        const result = await new FamiliesApi(AXIOS_CONFIG).getSingleFamily(familyId, {
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

