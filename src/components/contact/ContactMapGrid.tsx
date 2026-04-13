"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    title: "Corporate Headquarters",
    description: "Plot No. 33 B Nit, Faridabad, Haryana - 121001, India",
    mapImage: "/images/stockyard.jpg",
    mapLink: "https://www.google.com/maps/search/33+B+Nit,+Faridabad"
  },
  {
    title: "Delhi Distribution Hub",
    description: "C-55/2, Wazirpur Industrial Area, New Delhi - 110052, India",
    mapImage: "/images/warehouse.jpg",
    mapLink: "https://www.google.com/maps/search/Wazirpur+Industrial+Area,+New+Delhi"
  },
  {
    title: "Central Warehousing",
    description: "Plot No. 1401/2 & 1415, GIDC Industrial Estate, Palwal, Haryana, India",
    mapImage: "/images/stockyard-lauls.jpg",
    mapLink: "https://www.google.com/maps/search/Palwal+Haryana"
  },
  {
    title: "Regional Sales Office",
    description: "1603 to 1605, Block - D, Westgate Highway, Ahmedabad, Gujarat - 380015, India",
    mapImage: "/images/trading.jpg",
    mapLink: "https://www.google.com/maps/search/Ahmedabad+Gujarat"
  }
];

export default function ContactMapGrid() {
  return (
    <section className="bg-white py-16 md:py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0A1628] mb-12 tracking-tight">
          Our Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {locations.map((loc, idx) => (
             <div key={idx} className="group flex flex-col">
                <div className="relative w-full h-[200px] bg-gray-100 overflow-hidden mb-6 border border-gray-100">
                  <Image
                    src={loc.mapImage}
                    alt={`Map of ${loc.title}`}
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Overlay button */}
                  <div className="absolute top-4 left-4">
                     <a href={loc.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white shadow-md border border-gray-100 text-[#3b82f6] text-xs font-bold rounded-md hover:bg-gray-50 transition-colors pointer-events-auto">
                        Maps <ExternalLink size={12} />
                     </a>
                  </div>
                </div>

                <h4 className="text-[#0A1628] font-bold text-lg leading-tight mb-3 pr-4">{loc.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed pr-4">{loc.description}</p>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
