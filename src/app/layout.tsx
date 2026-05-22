import type { Metadata } from "next";
import { siteContent } from "@/data/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
