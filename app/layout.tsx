import type { Metadata, Viewport } from "next";
import "./globals.css";
import TabBar from "@/components/TabBar";

export const metadata: Metadata = {
  title: "The Total Wife",
  description: "For Lucia — everything a total wife knows, plus everything Josh loves to eat",
  manifest: "/food-app-lucia/manifest.json",
  icons: {
    icon: "/food-app-lucia/icon-192.png",
    apple: "/food-app-lucia/apple-icon.png",
  },
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
