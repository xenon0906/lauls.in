import { cloudinary } from "@/utils/cloudinary";

export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Organization", "B2BBusiness"],
        "@id": "https://lauls.in/#organization",
        "name": "Lauls Private Limited",
        "description": "Logistics & Steel Handling, Ferro Alloys Distribution (TATA Steel authorized), and Railway Track Fastener Manufacturing.",
        "foundingDate": "1933",
        "founder": {
          "@type": "Person",
          "name": "Mr. SR Laul"
        },
        "url": "https://lauls.in",
        "logo": cloudinary("images/logo.png"),
        "image": cloudinary("images/slider/Banner.jpg"),
        "telephone": "+91-129-4098300",
        "email": "info@lauls.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "33-B, N.I.T.",
          "addressLocality": "Faridabad",
          "addressRegion": "Haryana",
          "postalCode": "121001",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "28.3888",
          "longitude": "77.3175"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "sameAs": [
          "https://www.linkedin.com/company/10073868"
        ],
        "knowsAbout": [
          "Steel Logistics",
          "Ferro Alloys Distribution",
          "Railway Track Fasteners",
          "Electric Truck Transport",
          "Wire Rods and Steel Rounds"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Industrial Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Steel Logistics & Warehousing",
                "description": "WAREX GOLD certified handling of 1,000,000 MT of steel annually.",
                "url": "https://lauls.in/logistics"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Ferro Alloys Distribution",
                "description": "Authorized TATA Steel Ferro Alloys distributor for Northern India. Ferro chrome, ferro manganese, silico manganese.",
                "url": "https://lauls.in/products/ferro-alloys"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Railway Track Fastener Manufacturing",
                "description": "RDSO approved manufacturer of fishplates, elastic rail clips, and SGCI inserts.",
                "url": "https://lauls.in/about"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Electric Truck Logistics",
                "description": "Sustainable EV fleet for zero-emission industrial deliveries. Pledged 100% diesel-free by 2027.",
                "url": "https://lauls.in/electric-truck"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Pan-India Steel Distribution",
                "description": "50+ warehouses with same-day dispatch from major hubs. Wire rods, steel rounds, precision tubes.",
                "url": "https://lauls.in/distribution"
              }
            }
          ]
        }
      },
      {
        "@type": "Product",
        "name": "Railway Track Fastener - Fishplates",
        "image": cloudinary("images/below-slider/manufacturing.jpg"),
        "description": "High-durability RDSO approved Railway Fishplates.",
        "sku": "LAULS-FISHPLATE-01",
        "brand": {
          "@type": "Brand",
          "name": "Lauls Private Limited"
        },
        "manufacturer": {
          "@id": "https://lauls.in/#organization"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "124"
        }
      },
      {
        "@type": "Product",
        "name": "Elastic Rail Clips (ERC)",
        "image": cloudinary("images/below-slider/manufacturing.jpg"),
        "description": "RDSO approved Elastic Rail Clips for Indian Railways.",
        "sku": "LAULS-ERC-02",
        "brand": {
          "@type": "Brand",
          "name": "Lauls Private Limited"
        },
        "manufacturer": {
          "@id": "https://lauls.in/#organization"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "98"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://lauls.in/#webpage",
        "url": "https://lauls.in",
        "name": "Lauls Private Limited | Industrial Steel & EV Solutions",
        "isPartOf": {
          "@id": "https://lauls.in/#website"
        },
        "about": {
          "@id": "https://lauls.in/#organization"
        },
        "mentions": [
          { "@type": "Thing", "name": "Steel Logistics" },
          { "@type": "Thing", "name": "Ferro Alloys" },
          { "@type": "Thing", "name": "Railway Track Fasteners" },
          { "@type": "Thing", "name": "Electric Trucks" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://lauls.in/#website",
        "url": "https://lauls.in",
        "name": "Lauls Private Limited",
        "publisher": {
          "@id": "https://lauls.in/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://lauls.in/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://lauls.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Logistics",
            "item": "https://lauls.in/logistics"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Products",
            "item": "https://lauls.in/products"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Distribution",
            "item": "https://lauls.in/distribution"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://lauls.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What logistics services does Lauls Private Limited provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide end-to-end logistics solutions, ensuring reliable supply chains and operational efficiency for massive industrial cargo, managing over 500,000 MT of transport annually."
            }
          },
          {
            "@type": "Question",
            "name": "Do you supply heavy alloy steel rounds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We operate extensive stockyards dedicated to distributing heavy alloy steel, precision tubes, and rounds to meet diverse industrial manufacturing requirements."
            }
          },
          {
            "@type": "Question",
            "name": "Which ferro alloys do you trade and supply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As the authorized distributor of TATA Steel Ferro Alloys & Minerals in Northern India, we supply high-quality ferro chrome, ferro manganese, and other essential minerals."
            }
          },
          {
            "@type": "Question",
            "name": "What is your approach to sustainable transport?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are pioneering sustainable transport with our expanding fleet of electric trucks, significantly reducing carbon footprints."
            }
          },
          {
            "@type": "Question",
            "name": "What products does Lauls Private Limited distribute?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We distribute wire rods (high-carbon, low-carbon, special alloy), steel rounds, precision tubes (seamless and welded), and ferro alloys (ferro silicon, ferro manganese, silico manganese)."
            }
          },
          {
            "@type": "Question",
            "name": "Where is Lauls Private Limited located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our headquarters is at 33-B, N.I.T., Faridabad, Haryana 121001, India. We have 50+ warehouses across pan-India for distribution."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/logistics#service",
        "name": "Steel Logistics & Warehousing",
        "description": "End-to-end logistics solutions for industrial cargo. Full truckload, part load, express delivery with 200+ truck fleet including EV options.",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Industrial Logistics",
        "url": "https://lauls.in/logistics"
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/distribution#service",
        "name": "Pan-India Steel Distribution",
        "description": "50+ warehouses with same-day dispatch. Wire rods, steel rounds, precision tubes, ferro alloys distributed across India.",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Steel Distribution",
        "url": "https://lauls.in/distribution"
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/electric-truck#service",
        "name": "Electric Truck Logistics",
        "description": "Sustainable EV fleet for zero-emission industrial deliveries. Pledged 100% diesel-free operations by 2027.",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "serviceType": "Green Logistics",
        "url": "https://lauls.in/electric-truck"
      },
      {
        "@type": "ItemList",
        "@id": "https://lauls.in/products#itemlist",
        "name": "Steel Products Catalog",
        "description": "Complete range of steel products distributed by Lauls Private Limited",
        "numberOfItems": 4,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Product",
              "name": "Wire Rods",
              "description": "High-carbon, low-carbon, and special alloy wire rods for manufacturing",
              "url": "https://lauls.in/products/wire-rods"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Product",
              "name": "Steel Rounds",
              "description": "Precision-cut steel rounds for manufacturing applications",
              "url": "https://lauls.in/products/steel-rounds"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Product",
              "name": "Precision Tubes",
              "description": "Seamless and welded precision tubes for automotive and industrial use",
              "url": "https://lauls.in/products/precision-tubes"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Product",
              "name": "Ferro Alloys",
              "description": "Ferro silicon, ferro manganese, silico manganese - authorized TATA Steel distributor",
              "url": "https://lauls.in/products/ferro-alloys"
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://lauls.in/#howto-order",
        "name": "How to Order Steel Products from Lauls Private Limited",
        "description": "Step-by-step guide to ordering steel products, logistics services, and ferro alloys from Lauls.",
        "totalTime": "P3D",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Browse Products",
            "text": "Visit our products page to explore wire rods, steel rounds, precision tubes, and ferro alloys catalog.",
            "url": "https://lauls.in/products"
          },
          {
            "@type": "HowToStep",
            "name": "Request a Quote",
            "text": "Contact our sales team via phone (+91-129-4098300), email (info@lauls.in), or WhatsApp (+91-98186-88470) with your requirements.",
            "url": "https://lauls.in/contact"
          },
          {
            "@type": "HowToStep",
            "name": "Confirm Order",
            "text": "Review the quote, confirm specifications, and place your order. We handle custom cutting and sizing.",
            "url": "https://lauls.in/contact"
          },
          {
            "@type": "HowToStep",
            "name": "Track Delivery",
            "text": "Your order is dispatched from the nearest warehouse with real-time GPS tracking. Delivery within 3-5 business days pan-India.",
            "url": "https://lauls.in/logistics"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
