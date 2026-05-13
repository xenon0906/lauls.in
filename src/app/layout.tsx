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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What logistics services does Lauls Ltd provide?",
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
        text: "Yes, we operate extensive, strategically located stockyards dedicated to distributing heavy alloy steel, precision tubes, and rounds to meet diverse industrial manufacturing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Which ferro alloys do you trade and supply?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "As the sole authorized distributor of TATA Steel Ferro Alloys & Minerals in Northern India, we supply high-quality ferro chrome, ferro manganese, silico manganese, and other essential minerals.",
      },
    },
    {
      "@type": "Question",
      name: "What is your approach to sustainable transport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are pioneering sustainable transport with our expanding fleet of electric trucks, significantly reducing carbon footprints and promoting eco-friendly practices in heavy industry operations.",
      },
    },
    {
      "@type": "Question",
      name: "What are your capabilities in precision tubes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer dedicated handling and storage for specialized precision pipes, employing flawless concentric engineering for critical high-pressure systems while maintaining zero-defect methodology.",
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

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lauls Ltd",
  url: "https://lauls.in",
  description:
    "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
  publisher: {
    "@type": "Organization",
    name: "Lauls Ltd",
    logo: "https://lauls.in/images/logo.png",
  },
};

// JSON-LD is a static constant - safe to serialize directly
const jsonLdString = JSON.stringify(jsonLd);
const faqJsonLdString = JSON.stringify(faqJsonLd);
const webSiteJsonLdString = JSON.stringify(webSiteJsonLd);

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: webSiteJsonLdString }}
        />
        {children}
        <FloatingContact />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}
