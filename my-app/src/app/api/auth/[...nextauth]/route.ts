import { login } from "@/lib/api";
import NextAuth, { SessionStrategy } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
    providers : [
        CredentialsProvider({
        name : 'Credentials',
        credentials :{
            email : {label : 'Email', type : 'email'},
            password : {label : 'Password', type : 'password'},
        },
        async authorize(credentials) {
            //Kirim request login ke API Platzi & ambil data token
            const userToken = await login(credentials?.email, credentials?.password)

            if (!userToken){
                alert('email atau password salah')
                return null;
            }

            if(userToken.access_token) {
                const dataUserRes = await fetch ("https://api.escuelajs.co/api/v1/auth/profile",{
                    headers : {Authorization : `Bearer ${userToken.access_token}`}
                })

                const dataUser = await dataUserRes.json()

                return {
                    id: dataUser.id,
                    name: dataUser.name,
                    email: dataUser.email,
                    image: dataUser.avatar,
                    accessToken: userToken.access_token,
                };   
            }
            return null;
        },
    })],
    session : {strategy : 'jwt' as SessionStrategy},
    callbacks : {
        async jwt({ token, user }:any) {
            // Simpan token akses kalau ada user baru login
            if (user) token.accessToken = user.accessToken;
            return token;
        },
        async session({ session, token }:any) {
            // Tambahkan accessToken ke session biar bisa dipakai di fetch lain
            session.accessToken = token.accessToken;
            return session;
        },
    }
}

const handler = NextAuth(authOptions);
export  { handler as GET, handler as POST };
