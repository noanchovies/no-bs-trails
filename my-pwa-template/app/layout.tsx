import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import StickyAd from "@/components/layout/StickyAd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My PWA Template",
  description: "Mobile first progressive web app template",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-white`}>
        <Header />
        
        {/* Main Content: Padding top for Header, Padding bottom for Ad */}
        <main className="pt-16 pb-24 min-h-screen">
          {children}
        </main>

        <StickyAd />
      </body>
    </html>
  );
}
