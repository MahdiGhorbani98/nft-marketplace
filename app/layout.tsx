import type { Metadata } from "next";
import Navbar from "@/components/shared/Navbar";
import { Providers } from "./providers";
import { fontSans } from "@/config/fonts";
import "./globals.css";

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
        className={`${fontSans.variable} ${fontSans.className} antialiased container mx-auto max-w-7xl flex-grow`}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
