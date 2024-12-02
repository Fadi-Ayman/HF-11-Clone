import type { Metadata } from "next";
import "./_styles/globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const metadata: Metadata = {
  title: { default: "HF-11 Clone", template: "%s | Hf-11 Clone" },
  description: "HF-11 Clone from OILSTAINLAB | for learning purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className}`}>{children}</body>
    </html>
  );
}
