import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eden Technologies Pvt. Ltd. | Web, Software, Innovation",
  description: "We design and build websites, mobile apps, and digital products that help businesses grow.",
};

import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
