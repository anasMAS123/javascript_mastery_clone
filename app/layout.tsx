import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "JS mastery",
  description: "JS mastery clone as a training for using next.js 14 with TS ",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "twitter:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "twitter:card": "summary_large_image",
    "og:url": "jsmastery.pro",
    "og:image": "https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg",
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
