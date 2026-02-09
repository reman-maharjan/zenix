import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Configure your production URL in NEXT_PUBLIC_SITE_URL for correct absolute URLs
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  title: {
    default:
      "Zenix Digital Productions – Digital marketing & content studio in Jwagal, Lalitpur",
    template: "%s | Zenix Digital Productions",
  },
  description:
    "Zenix Digital Productions is a digital marketing and content studio based in Jwagal, Lalitpur, helping brands with strategy, social media, photography, video and web.",
  keywords: [
    "Zenix Digital Productions",
    "digital marketing Nepal",
    "social media marketing",
    "content studio",
    "photography and videography",
    "brand campaigns",
    "Lalitpur",
    "Kathmandu",
  ],
  openGraph: {
    title: "Zenix Digital Productions – Digital marketing & content studio",
    description:
      "Strategy, content and performance marketing for modern brands, crafted by a small senior team in Jwagal, Lalitpur.",
    url: "/",
    siteName: "Zenix Digital Productions",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Zenix Digital Productions logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenix Digital Productions – Digital marketing & content studio",
    description:
      "Strategy, content and performance marketing for modern brands, crafted by a small senior team in Jwagal, Lalitpur.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
