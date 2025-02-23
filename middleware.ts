import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';
import { getIronSession } from "iron-session";
import { SessionData } from "./types/types";

const publicRoutes = [
    "/admin/login",
    "/admin/register",
    "/admin/reset-password-email",
    "/admin/reset-password-form",
    "/admin/otp",
];

const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: "session",
    ttl: 60 * 60 * 24, // 1 day
};

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    if (publicRoutes.includes(req.nextUrl.pathname)) {
        return res;
    }

    const session = await getIronSession<SessionData>(req, res, sessionOptions);

    if (!session.user) {
        if (req.nextUrl.pathname.startsWith("/admin")) {
            return NextResponse.redirect(new URL("/admin/login", req.url));
        } else if (req.nextUrl.pathname.startsWith("/user")) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    if (req.nextUrl.pathname.startsWith("/admin") && session.user && session.user.role !== "admin") {
        return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/user") && session.user && session.user.role !== "user") {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return res;
}

export const config = {
    matcher: ["/admin/:path*", "/user/:path*"],
};
