import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Serif  } from 'next/font/google'

const roboto = Roboto_Serif({weight : [ '100', '400', '600', '700', '800', '900'], subsets : [ 'cyrillic'] })

export const metadata: Metadata = {
  title: "Razorpay",
  description: "Razorpay Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        {children}
      </body>
    </html>
  );
}
