import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cloudinary } from "@/utils/cloudinary";
import FloatingContact from "@/components/FloatingContact";
import Schema from "@/components/seo/Schema";

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
  alternates: {
    canonical: "https://lauls.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "PLACEHOLDER_FOR_GOOGLE_SITE_VERIFICATION",
  },
  other: {
    "GSTIN": "06AAACL3118P1ZF",
    "contact": "+91-129-4098300",
    "geo.region": "IN-HR",
    "geo.placename": "Faridabad",
    "geo.position": "28.3888;77.3175",
    "ICBM": "28.3888, 77.3175",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What logistics services does Lauls Private Limited provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide end-to-end logistics solutions, ensuring reliable supply chains and operational efficiency for massive industrial cargo, managing over 500,000 MT of transport annually.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply heavy alloy steel rounds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate extensive stockyards dedicated to distributing heavy alloy steel, precision tubes, and rounds to meet diverse industrial manufacturing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Which ferro alloys do you trade and supply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As the authorized distributor of TATA Steel Ferro Alloys & Minerals in Northern India, we supply high-quality ferro chrome, ferro manganese, and other essential minerals.",
      },
    },
    {
      "@type": "Question",
      name: "What is your approach to sustainable transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are pioneering sustainable transport with our expanding fleet of electric trucks, significantly reducing carbon footprints.",
      },
    },
    {
      "@type": "Question",
      name: "What are your capabilities in precision tubes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer dedicated handling and storage for specialized precision pipes, employing flawless concentric engineering for critical systems.",
      },
    },
    {
      "@type": "Question",
      name: "What types of wire rods do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We supply high-grade mild, alloy, and stainless steel wire rods that are optimized for precise drawing, complex fabrication, and aerospace or power sector applications.",
      },
    },
  ],
};

const faqJsonLdString = JSON.stringify(faqJsonLd);

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
        {/* Preconnects for ultra-fast asset loading at the edge */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
      </head>
      <body className="min-h-full flex flex-col bg-primary text-body relative group overflow-x-clip">
        <Schema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
