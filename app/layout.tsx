import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./_components/Header";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Oasis",
  description:
    "Escape to The Oasis — a luxury retreat nestled in nature. Explore our cabins, unwind in tranquility, and book your perfect getaway today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${josefin.className} antialiased h-screen`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
