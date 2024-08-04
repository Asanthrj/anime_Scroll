import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Hero from "./components/hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime value",
  description: "Your fav anime in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero/>
        {children}</body>
    </html>
  );
}
