import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Montage Clinic",
  description: "Your trusted healthcare partner",
    icons: {
    icon: [
      { url: "/image.png", sizes: "any" },
      { url: "/image.png", sizes: "16x16", type: "image/png" },
      { url: "/image.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/image.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/image.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/image.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">   
          <main className="flex-1">{children}</main>
        </body>
    </html>
  );
}
