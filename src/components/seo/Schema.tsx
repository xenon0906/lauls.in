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
        "areaServed": [
          { "@type": "City", "name": "Faridabad" },
          { "@type": "City", "name": "Delhi" },
          { "@type": "City", "name": "Gurugram" },
          { "@type": "City", "name": "Noida" },
          { "@type": "State", "name": "Haryana" },
          { "@type": "Country", "name": "India" }
        ],
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
                "description": "WAREX GOLD certified handling of 1,000,000 MT of steel annually."
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
        "@type": "Product",
        "name": "Ferro Alloys (Ferro Chrome, Ferro Manganese, Ferro Silicon, Silico Manganese)",
        "image": cloudinary("images/slider/Banner.jpg"),
        "description": "Authorized TATA Steel distributor of high-grade ferro alloys for steel manufacturing across Northern India.",
        "brand": { "@type": "Brand", "name": "TATA Steel" },
        "manufacturer": { "@id": "https://lauls.in/#organization" }
      },
      {
        "@type": "Product",
        "name": "Alloy Steel Wire Rods & Mild Steel Wire Rods",
        "image": cloudinary("images/IMG_9877.JPG"),
        "description": "Precision-rolled alloy steel and mild steel wire rods for automotive springs, fasteners, and industrial applications.",
        "brand": { "@type": "Brand", "name": "Lauls Private Limited" },
        "manufacturer": { "@id": "https://lauls.in/#organization" }
      },
      {
        "@type": "Product",
        "name": "Steel Rounds (Alloy & Mild Steel)",
        "image": cloudinary("images/IMG_9988.JPG"),
        "description": "High-strength forged and rolled steel rounds for heavy engineering, auto-component and defence applications.",
        "brand": { "@type": "Brand", "name": "Lauls Private Limited" },
        "manufacturer": { "@id": "https://lauls.in/#organization" }
      },
      {
        "@type": "Product",
        "name": "Precision Tubes (ERW & Hollow Sections)",
        "image": cloudinary("images/IMG_9988.JPG"),
        "description": "ERW steel tubes and square/rectangular hollow sections for structural, mechanical, and automotive applications.",
        "brand": { "@type": "Brand", "name": "Lauls Private Limited" },
        "manufacturer": { "@id": "https://lauls.in/#organization" }
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/#service-logistics",
        "name": "Steel Logistics & Heavy Transport",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": ["Delhi NCR", "Faridabad", "Pan India"],
        "description": "End-to-end steel logistics with 400+ heavy fleet vehicles, WAREX GOLD certified warehousing, and JIT delivery models across India."
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/#service-ev-trucking",
        "name": "Electric Truck Fleet & Green Logistics",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": ["Delhi NCR", "Faridabad", "Pan India"],
        "description": "Zero-emission heavy electric truck fleet with 55T payload capacity, LNG/CNG alternatives, and smart charging network for sustainable industrial logistics."
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/#service-ferro-alloys",
        "name": "Ferro Alloys Distribution",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": ["Northern India", "Faridabad", "Delhi"],
        "description": "Authorized TATA Steel Ferro Alloys & Minerals distributor. Supplying Ferro Chrome, Ferro Manganese, Ferro Silicon, and Silico Manganese across Northern India."
      },
      {
        "@type": "Service",
        "@id": "https://lauls.in/#service-railway",
        "name": "Railway Track Fastener Manufacturing",
        "provider": { "@id": "https://lauls.in/#organization" },
        "areaServed": ["India"],
        "description": "RDSO approved manufacturer of Railway Track Fasteners including Fishplates, Elastic Rail Clips (ERC), and SGCI Inserts for Indian Railways."
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
        ],
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".speakable-header", ".speakable-summary", "h1", "h2"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://lauls.in/#website",
        "url": "https://lauls.in",
        "name": "Lauls Private Limited",
        "publisher": {
          "@id": "https://lauls.in/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://lauls.in/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
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
            "name": "What is the difference between HC, MC, and LC Ferro Chrome?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "High Carbon (HC) Ferro Chrome contains 4-8% carbon for stainless steel production. Medium Carbon (MC) has 0.5-4% carbon for controlled applications. Low Carbon (LC) has under 0.5% carbon for specialty steels. Lauls supplies all three grades from premium TATA Steel smelters."
            }
          },
          {
            "@type": "Question",
            "name": "Does Lauls supply alloy steel wire rods for automotive applications?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we supply SAE-grade alloy steel wire rods (5.5mm-25mm diameter) specifically for automotive springs, fasteners, and high-strength bolts. Stock is sourced from SAIL, TATA, and JSW mills with full mill test certificates."
            }
          },
          {
            "@type": "Question",
            "name": "What diameter range of steel rounds does Lauls supply?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We supply alloy steel rounds from 20mm to 500mm diameter and mild steel rounds from 6mm to 250mm diameter, available in both black (hot rolled) and bright (cold drawn) finishes."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between ERW tubes and seamless tubes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ERW tubes are manufactured by rolling steel strips and welding the seam longitudinally, offering tighter tolerances and cost-effectiveness. Seamless tubes are extruded from solid billets for high-pressure applications. Lauls supplies both types conforming to IS and ASTM standards."
            }
          },
          {
            "@type": "Question",
            "name": "What is the payload capacity of your electric truck fleet?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our heavy-duty electric trucks have a maximum gross payload of 55 tonnes (55T), specifically engineered for transporting steel coils, ferro alloys, and massive infrastructural components with zero tailpipe emissions."
            }
          },
          {
            "@type": "Question",
            "name": "What types of cargo does Lauls logistics handle?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We handle heavy industrial cargo including steel billets, coils, wire rods, ferro alloys, heavy machinery, and over-dimensional consignments across India using our fleet of 400+ owned vehicles."
            }
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
