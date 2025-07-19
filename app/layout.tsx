import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Better font loading for Safari
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap", // Better font loading for Safari
});

export const metadata: Metadata = {
  title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
  description: "Northwind Sanctuary is a premium real estate development that integrates sustainable living with abundant greenery and natural landscapes, offering residents a harmonious blend of modern amenities and environmental conservation.",
  // 🚨 CRITICAL: Add viewport for Safari/mobile compatibility
  viewport: "width=device-width, initial-scale=1",
  keywords: "Northwind Sanctuary, sustainable real estate, green living, premium development, eco-friendly homes, natural landscapes, environmental conservation, modern amenities, green spaces, sustainable community",
  authors: [{ name: "Northwind Sanctuary Development" }],
  openGraph: {
    title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
    description: "Discover Northwind Sanctuary, where sustainable living meets luxury. Premium real estate development with abundant greenery and natural landscapes.",
    type: "website",
    locale: "en_US",
    siteName: "Northwind Sanctuary",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northwind Sanctuary - Premium Sustainable Real Estate Development",
    description: "Premium real estate development integrating sustainable living with abundant greenery and natural landscapes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.northwindsanctuary.com",
  },
  category: "Real Estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}