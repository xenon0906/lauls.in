import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import FloatingContact from "@/components/FloatingContact";
import WhatsAppFloatingCTA from "@/components/WhatsAppFloatingCTA";
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
    default: "LAULS PRIVATE LIMITED | Industrial Steel & EV Solutions",
    template: "%s | LAULS PRIVATE LIMITED",
  },
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
    title: "LAULS PRIVATE LIMITED | EV Wire Solutions & Industrial Steel Manufacturing",
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
    title: "LAULS PRIVATE LIMITED | EV Wire Solutions & Industrial Steel Manufacturing",
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
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Faridabad",
  },
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
      <body className="min-h-full flex flex-col bg-primary text-body relative group overflow-x-clip">
        <Schema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: faqJsonLdString }}
        />
        {children}
        <FloatingContact />
        <WhatsAppFloatingCTA />
      </body>
    </html>
  );
}
