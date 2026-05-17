export default function Schema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LAULS PRIVATE LIMITED",
    url: "https://lauls.in",
    logo: "https://lauls.in/images/logo.png",
    foundingDate: "1933",
    description: "Leading EV wire solutions and round wire manufacturers in India since 1933. Specialized in alloy steel wire rods, industrial steel manufacturing, and EV supply chain solutions.",
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

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LAULS PRIVATE LIMITED",
    url: "https://lauls.in",
    description: "Leading EV wire solutions and round wire manufacturers in India since 1933.",
    publisher: {
      "@type": "Organization",
      name: "LAULS PRIVATE LIMITED",
      logo: "https://lauls.in/images/logo.png",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
    </>
  );
}
