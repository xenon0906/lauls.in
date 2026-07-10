import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cloudinary } from "@/utils/cloudinary";
import LevAiBot from "@/components/levai/LevAiBot";
import FloatingContact from "@/components/FloatingContact";
import Schema from "@/components/seo/Schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lauls.in"),
  title: {
    default: "Lauls Private Limited | Logistics | Ferro Alloys | Railway Manufacturing | Since 1933",
    template: "%s | Lauls Private Limited",
  },
  description:
    "Lauls Private Limited is an industrial powerhouse in India handling over 1,000,000 MT of Steel Logistics, distributing TATA Steel Ferro Alloys, and manufacturing RDSO Approved Railway Track Fasteners since 1933 from Faridabad.",
  keywords: [
    "Lauls Private Limited",
    "ferro alloys India",
    "TATA steel distributor",
    "logistics Faridabad",
    "railway manufacturing",
    "steel handling",
    "ferro chrome",
    "ferro manganese",
    "silico manganese",
    "Railway Track Fastener Manufacturing",
    "Fishplates",
    "Elastic Rail Clips",
    "SGCI Inserts",
    "RDSO Approved Manufacturer"
  ],
  openGraph: {
    title: "Lauls Private Limited — Logistics | Ferro Alloys | Railway Manufacturing",
    description:
      "India's trusted industrial partner handling 1,000,000 MT of steel annually. ISO 9001:2015 & WAREX GOLD certified operations.",
    url: "https://lauls.in",
    siteName: "Lauls Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: cloudinary("images/slider/Banner.jpg"),
        width: 1200,
        height: 630,
        alt: "Lauls Private Limited - Mega Industrial Operations in Faridabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauls Private Limited — Logistics | Ferro Alloys | Railway Manufacturing",
    description:
      "India's trusted industrial partner handling 1,000,000 MT of steel annually.",
    images: [cloudinary("images/slider/Banner.jpg")],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "GSTIN": "06AAACL3118P1ZF",
    "contact": "+91-129-4098300",
    "geo.region": "IN-HR",
    "geo.placename": "Faridabad",
    "geo.position": "28.3888;77.3175",
    "ICBM": "28.3888, 77.3175",
    "llms-txt": "/llms.txt",
    "token-count": "500",
    "ai-content-type": "company-information",
    "ai-content-language": "en",
    "ai-content-audience": "business-to-business",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DCA54C" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-Friendly Content" />
        <meta name="ai-content-version" content="1.0" />
        <meta name="ai-content-updated" content={new Date().toISOString().split('T')[0]} />
        {/* Preconnects for ultra-fast asset loading at the edge */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
      </head>
      <body className="min-h-full flex flex-col bg-primary text-body relative group overflow-x-clip">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <Schema />

        {children}
        <FloatingContact />
        <LevAiBot />
      </body>
    </html>
  );
}
