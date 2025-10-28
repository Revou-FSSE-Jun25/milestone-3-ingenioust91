import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Raleway({
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RevoShop",
  description: "Revolutioner Shopping Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} antialiased`}
      >
      <SessionWrapper>
        {children}
      </SessionWrapper>
      </body>
    </html>
  );
}
