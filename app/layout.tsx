import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from 'next/font/google'

const dmSans=DM_Sans({subsets:['latin']})

export const metadata: Metadata = {
  title: "Saas",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
