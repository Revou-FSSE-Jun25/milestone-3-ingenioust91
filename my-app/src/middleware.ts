import { NextRequest, NextResponse } from "next/server";

const privateRoutes = ["/admin", "/inputPage", "/adminListPage"]

export function middleware(req:NextRequest){
    const {pathname} = req.nextUrl; //ambil pathname dari URL yang mau diakses oleh user

    //ambil token
    const accessToken = req.cookies.get("access_token")?.value //cookies.get itu bawaan dari nextrequest untuk membaca cookie dari request user
    const refreshToken = req.cookies.get("refresh_token")?.value // tanda(?) supaya jika tidak ada, hasilnya undefined bukan error

    if (privateRoutes.includes(pathname) && accessToken && refreshToken){
        return NextResponse.next();
    } else if (privateRoutes.includes(pathname)){
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