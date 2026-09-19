import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
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
import AnimatedCursor from "@/components/AnimatedCursor";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "h-full", "antialiased", inter.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col relative">
        <AnimatedCursor />
        <BackgroundAnimation />
        {children}
      </body>
    </html>
  );
}
