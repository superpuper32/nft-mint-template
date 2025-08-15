import type { Metadata } from "next";

import { Providers } from "@/lib/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "NFT Mint Dapp",
  description: "Mint your exclusive NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
