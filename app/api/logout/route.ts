import {  NextResponse } from "next/server";
import { getIronSession } from "iron-session";

export async function GET(req: Request) {
    const res = new NextResponse(null, { 
        status: 302,
        headers: {
            Location: "/admin/login"
        }
    });

    const session = await getIronSession(req, res, {
        password: process.env.SECRET_COOKIE_PASSWORD as string,
        cookieName: "session",
        ttl: 60 * 60 * 24, // 1 day
    });

    session.destroy();

    return res;
}
