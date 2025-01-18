import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NFT_MarketPlace",
  description: "WEB3 Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSans.className} antialiased  w-full flex-grow`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
