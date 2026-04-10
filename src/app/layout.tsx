import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export const metadata: Metadata = {
  title: {
    default: "Utocom - Industrial Cameras & Machine Vision Solutions",
    template: "%s | Utocom - Industrial Cameras & Machine Vision Solutions"
  },
  description: "Utocom provides high-performance industrial cameras, smart cameras, and machine vision solutions for smart manufacturing, semiconductor, lithium battery, and automotive industries. 20 years of expertise in industrial vision.",
  keywords: [
    "industrial camera",
    "machine vision",
    "HDMI camera",
    "microscope camera",
    "vision inspection camera",
    "smart camera",
    "industrial vision solutions",
    "smart manufacturing",
    "Utocom",
    "Qingdao Utocom"
  ],
  authors: [{ name: "Qingdao Utocom Co., Ltd." }],
  creator: "Qingdao Utocom Co., Ltd.",
  publisher: "Qingdao Utocom Co., Ltd.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.utocom.com",
    siteName: "Utocom - Industrial Cameras & Machine Vision Solutions",
    title: "Utocom - Industrial Cameras & Machine Vision Solutions",
    description: "Utocom provides high-performance industrial cameras, smart cameras, and machine vision solutions for smart manufacturing, semiconductor, lithium battery, and automotive industries.",
    images: [
      {
        url: "https://www.utocom.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Utocom - Industrial Cameras & Machine Vision Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utocom - Industrial Cameras & Machine Vision Solutions",
    description: "Utocom provides high-performance industrial cameras, smart cameras, and machine vision solutions",
    images: ["https://www.utocom.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.utocom.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href="https://www.utocom.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
