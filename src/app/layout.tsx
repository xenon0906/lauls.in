import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";

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
    "Lauls Ltd — TATA Steel Authorized Ferro Alloys Distributors | Logistics & Railway Manufacturing Since 1933",
  description:
    "Lauls Ltd is Northern India's trusted industrial partner since 1933. Sole authorized distributor of TATA Steel Ferro Alloys & Minerals, ISO-certified logistics provider operating TATA Steel stockyards, and RDSO-approved railway track fastener manufacturer in Faridabad.",
  keywords: [
    "lauls ltd",
    "lauls limited",
    "tata steel ferro alloys distributor",
    "tata steel stockyard faridabad",
    "northern india steel logistics",
    "railway track fastener manufacturer",
    "ferro alloys distributor india",
    "steel handling faridabad",
    "RDSO approved manufacturer",
    "fishplate manufacturer india",
    "elastic rail clips",
    "SGCI inserts",
    "WAREX GOLD warehouse",
    "iron and steel logistics",
    "tata steel authorized dealer",
  ],
  openGraph: {
    title: "Lauls Ltd — India's Trusted Industrial Partner Since 1933",
    description:
      "Sole authorized TATA Steel Ferro Alloys distributor in Northern India. Operating stockyards, manufacturing railway track fasteners, and distributing ferro alloys since 1933.",
    url: "https://lauls.in",
    siteName: "Lauls Ltd",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/IMG_9916.JPG",
        width: 1200,
        height: 630,
        alt: "Lauls Ltd — Industrial operations since 1933",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lauls Ltd — India's Trusted Industrial Partner Since 1933",
    description:
      "Sole authorized TATA Steel Ferro Alloys distributor. Logistics, railway manufacturing & distribution since 1933.",
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
    "Northern India's trusted industrial enterprise since 1933. Sole authorized TATA Steel Ferro Alloys & Minerals distributors.",
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
      </body>
    </html>
  );
}
