"use client";

import SectionWrapper from "../SectionWrapper";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Logistics",
    badge: "Supply Chain",
    description: "End-to-end logistics solutions, ensuring reliable supply chains and operational efficiency for massive industrial cargo.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    tags: ["Pan India", "Warehouse", "Handling"],
    gridSpan: "lg:col-span-6 lg:row-span-2"
  },
  {
    title: "Electric Trucks",
    badge: "Eco-Fleet",
    description: "Pioneering sustainable transport with our fleet of electric trucks, reducing carbon footprints in heavy industry.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    tags: ["Zero Emission", "Sustainable", "Future Ready"],
    gridSpan: "lg:col-span-6 lg:row-span-1"
  },
  {
    title: "Fe Alloy Distribution",
    badge: "15K MT Annual",
    description: "Sole authorized distributor of TATA Steel Ferro Alloys & Minerals.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
    tags: ["TATA Steel", "Authorized"],
    gridSpan: "lg:col-span-3 lg:row-span-1"
  },
  {
    title: "Alloy Steel Distribution",
    badge: "TATA Partner",
    description: "Extensive stockyards distributing heavy alloy steel, precision tubes, and rounds.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
    tags: ["Steel Rounds", "Precision"],
    gridSpan: "lg:col-span-3 lg:row-span-1"
  }
];

export default function Pillars() {
  return (
    <SectionWrapper id="services" className="bg-gradient-to-br from-amber-50 to-white">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <span className="text-accent font-display font-medium uppercase tracking-[0.2em] text-xs">
          Our Services
        </span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mt-4 mb-4">
          Comprehensive Industrial Solutions
        </h2>
        <p className="text-primary/60 text-sm md:text-base leading-relaxed">
          From precision manufacturing to global logistics, we deliver end-to-end industrial solutions tailored to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6 min-h-[600px] lg:h-[700px]">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className={`${service.gridSpan} group relative rounded-3xl overflow-hidden cursor-pointer min-h-[350px] lg:min-h-0`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />
            
            {/* Gradient Overlay perfectly matching screenshot reference */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,22,40)] via-[rgba(10,22,40,0.3)] to-transparent opacity-90 transition-opacity" />

            {/* Content matching screenshot exactly */}
            <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-accent font-bold text-white text-[10px] uppercase tracking-wider rounded border border-accent/20 shadow-sm">
                  {service.badge}
                </span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3 leading-tight tracking-tight shadow-black/10">
                {service.title}
              </h3>
              
              <p className="text-white/80 text-xs lg:text-sm leading-relaxed mb-6 max-w-md shadow-black/10 drop-shadow-sm">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 border border-white/30 rounded text-[9px] uppercase font-bold text-white tracking-widest bg-black/20 backdrop-blur-sm transition-colors group-hover:bg-white/10 group-hover:border-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
