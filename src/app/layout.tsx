import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homekynd test",
  description: "Next.js + Three.js + TypeScript Homekynd test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
