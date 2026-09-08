import type { Metadata, Viewport } from "next";
import "./globals.css";
import TabBar from "@/components/TabBar";

export const metadata: Metadata = {
  title: "Joshua's Table",
  description: "A simple guide to the food Josh loves — made for Lucia",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#f2f2f7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="mx-auto max-w-2xl px-4 pb-32 pt-6">{children}</main>
        <TabBar />
      </body>
    </html>
  );
}
