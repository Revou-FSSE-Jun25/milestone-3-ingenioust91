import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const privateRoutes = ["/admin", "/inputPage", "/adminListPage"]

export async function middleware(req:NextRequest){
    const {pathname} = req.nextUrl; //ambil pathname dari URL yang mau diakses oleh user

    //ambil token
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET, raw: true });

    if (privateRoutes.includes(pathname) && token){
        //jika user sudah berhasil login bisa next ke page admin
        return NextResponse.next();
    } else if (privateRoutes.includes(pathname)){
        //jika belum, akan redirect ke login
        const loginUrl = new URL ("/login", req.url)
        loginUrl.searchParams.set("redirect",pathname)
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
}