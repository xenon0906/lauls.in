import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import WhatsAppFloatingCTA from "@/components/WhatsAppFloatingCTA";

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
  title:
    "Lauls Ltd | EV Wire Solutions, Round Wire Manufacturers & Industrial Steel",
  description:
    "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
  keywords: [
    "EV wire solutions",
    "round wire manufacturers",
    "alloy steel wire rods",
    "industrial steel manufacturing",
    "infrastructure steel solutions",
    "EV supply chain manufacturing",
    "industrial wire rod suppliers",
    "sustainable steel manufacturing India",
    "ferro alloys distributor india",
    "RDSO approved manufacturer",
    "tata steel authorized dealer",
    "lauls ltd"
  ],
  openGraph: {
    title: "Lauls Ltd | EV Wire Solutions & Industrial Steel Manufacturing",
    description:
      "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
    url: "https://lauls.in",
    siteName: "Lauls Ltd",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/IMG_9916.JPG",
        width: 1200,
        height: 630,
        alt: "Lauls Ltd — Industrial Steel Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauls Ltd | EV Wire Solutions & Industrial Steel Manufacturing",
    description:
      "Leading EV wire solutions and round wire manufacturers in India. Specialized in alloy steel wire rods and EV supply chain.",
    images: ["/images/IMG_9916.JPG"],
  },
  robots: {
    index: true,
    follow: true,
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
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Faridabad",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lauls Ltd",
  url: "https://lauls.in",
  logo: "https://lauls.in/images/logo.png",
  foundingDate: "1933",
  description:
    "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "33-B, N.I.T",
    addressLocality: "Faridabad",
    addressRegion: "Haryana",
    postalCode: "121001",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-129-4098300",
    contactType: "customer service",
    email: "info@lauls.in",
  },
  sameAs: ["https://www.linkedin.com/company/10073868"],
};

// JSON-LD is a static constant - safe to serialize directly
const jsonLdString = JSON.stringify(jsonLd);

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
      <body className="min-h-full flex flex-col bg-primary text-body relative group overflow-x-clip">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        />
        {children}
        <FloatingContact />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}
