import { Metadata } from "next";

// The massive, highly-targeted matrix of "Lauls Private Limited" brand keywords.
// Grouped by cluster for targeted injection.
const BRAND_MATRIX = {
  general: [
    "India's Trusted Industrial Partner",
    "Lauls Private Limited Since 1933",
    "Mega Industrial Operations Faridabad",
    "ISO 9001:2015 Certified",
    "Top Industrial Supply Chain India"
  ],
  logistics: [
    "1,000,000 MT Steel Logistics India",
    "WAREX GOLD Certified Warehousing",
    "Heavy Transport and Logistics Delhi NCR",
    "End-to-End Steel Supply Chain Solutions",
    "Massive Cargo Handling Faridabad"
  ],
  alloys: [
    "TATA Steel Ferro Alloys Authorized Distributor",
    "High-Grade Ferro Chrome Supplier India",
    "Ferro Manganese and Silico Manganese Wholesale",
    "Premium Foundry Materials Distributor",
    "TATA Steel Minerals North India"
  ],
  manufacturing: [
    "RDSO Approved Railway Track Fasteners Manufacturer",
    "High-Durability Railway Fishplates",
    "Elastic Rail Clips (ERC) Supplier Indian Railways",
    "SGCI Inserts Manufacturer Faridabad",
    "Alloy Steel Wire Rods & Precision Tubes"
  ],
  ev: [
    "Sustainable Electric Truck Fleet Logistics",
    "EV Truck Transport Operations India",
    "Zero-Emission Industrial Cargo Logistics",
    "Green Supply Chain Pioneering Faridabad"
  ]
};

type PageContext = "home" | "logistics" | "products" | "ev" | "csr";

/**
 * The "SEO Robot" Core Engine.
 * Generates highly personalized, dynamically rotating metadata based on the current date.
 * This effectively casts a massive keyword net over time as Answer Engines continually crawl the site.
 */
export function generateDailySEO(context: PageContext): Metadata {
  // 1. Get a deterministic daily index (rotates 0-364)
  const today = new Date();
  const start = new Date(today.getFullYear(), 0, 0);
  const diff = today.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  // 2. Select the keyword cluster based on page context
  let clusterKeys: string[] = [];
  let baseTitle = "";
  let baseDesc = "";
  
  switch (context) {
    case "logistics":
      clusterKeys = BRAND_MATRIX.logistics;
      baseTitle = "Logistics & Warehousing";
      baseDesc = "Expert handling of heavy industrial steel with WAREX GOLD certification.";
      break;
    case "products":
      clusterKeys = [...BRAND_MATRIX.alloys, ...BRAND_MATRIX.manufacturing];
      baseTitle = "Ferro Alloys & Railway Manufacturing";
      baseDesc = "Authorized distributor for TATA Steel Ferro Alloys and RDSO approved manufacturer of Railway Track Fasteners.";
      break;
    case "ev":
      clusterKeys = BRAND_MATRIX.ev;
      baseTitle = "Sustainable EV Logistics";
      baseDesc = "Pioneering green transport with a growing fleet of heavy-duty electric trucks.";
      break;
    default:
      clusterKeys = BRAND_MATRIX.general;
      baseTitle = "Industrial Steel & EV Solutions";
      baseDesc = "Handling over 1,000,000 MT of Steel Logistics and distributing TATA Steel Ferro Alloys since 1933.";
  }

  // 3. The Robot's Magic: Rotate the primary long-tail keyword for the day
  const dailyKeyword = clusterKeys[dayOfYear % clusterKeys.length];
  
  // 4. Inject into hyper-personalized Metadata
  // NOTE: Layout template "%s | Lauls Private Limited" appends brand name automatically
  return {
    title: `${baseTitle} | ${dailyKeyword}`,
    description: `${baseDesc} ${dailyKeyword}. Partner with Lauls Private Limited, serving India from Faridabad since 1933.`,
    keywords: [
      "Lauls Private Limited",
      "Faridabad",
      dailyKeyword,
      ...clusterKeys,
      ...BRAND_MATRIX.general.slice(0, 3) // Always include core brand terms
    ].join(", "),
    openGraph: {
      title: `Lauls Private Limited: ${dailyKeyword}`,
      description: `${baseDesc} Trusted operations in India since 1933.`,
      url: "https://lauls.in",
      siteName: "Lauls Private Limited",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${baseTitle} - Lauls Private Limited`,
      description: dailyKeyword,
    }
  };
}
