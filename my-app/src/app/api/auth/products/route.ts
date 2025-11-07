import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function POST (req:NextRequest){
    try{
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET, raw: true }); //ambil token via next-auth

        if (!token){
            return NextResponse.json({error : 'Token not found'}, {status : 401})
        }

        const data = await req.json() //ambil isi dari handlesubmit product, ubah ke JSON

        // Kirim data ke Escuelajs API
        const response = await fetch ('https://api.escuelajs.co/api/v1/products/',
            {
                method: 'POST',
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : `Bearer ${token}`
                },
                body : JSON.stringify(data) //masukin isi handlesubmit kesini
            }
        )

        const result = await response.json();
        return NextResponse.json(result)
    }
    catch (e) {
        console.error('FAILED POST DATA', e);
        return NextResponse.json({error : 'FAILED CREATE PRODUCT'}, {status : 500})
    }
}