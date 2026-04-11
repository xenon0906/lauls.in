"use client";

import { 
  Truck, 
  Warehouse, 
  Settings, 
  Layers, 
  Cog, 
  Fuel, 
  CircleDot,
} from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Steel Trading", icon: <Settings size={30} strokeWidth={1.5} />, href: "/distribution" },
  { name: "Logistics", icon: <Truck size={30} strokeWidth={1.5} />, href: "/logistics" },
  { name: "Warehouse", icon: <Warehouse size={30} strokeWidth={1.5} />, href: "/logistics" },
  { name: "Ferro Alloys", icon: <Fuel size={30} strokeWidth={1.5} />, href: "/products#ferro-alloys" },
  { name: "Steel Rounds", icon: <CircleDot size={30} strokeWidth={1.5} />, href: "/products#steel-rounds" },
  { name: "Wire Rods", icon: <Layers size={30} strokeWidth={1.5} />, href: "/products#wire-rods" },
  { name: "Precision Tubes", icon: <Cog size={30} strokeWidth={1.5} />, href: "/products#precision-tubes" },
];

export default function ServicesBar() {
  return (
    <div className="relative z-20 bg-primary/5 py-8 md:py-12 px-6 md:px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto glass rounded-2xl md:rounded-full p-2 md:p-3 overflow-hidden">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-around gap-4 md:gap-0">
          {services.map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="flex-1 min-w-[120px] md:min-w-0 flex flex-col md:flex-row items-center justify-center gap-3 p-4 md:p-6 group hover:bg-white/5 transition-all relative"
            >
              <div className="text-white/40 group-hover:text-highlight transition-colors duration-300">
                {service.icon}
              </div>
              <span className="text-xs md:text-sm font-bold text-white/60 group-hover:text-white uppercase tracking-widest text-center transition-colors">
                {service.name.replace(" Trading", "")}
              </span>
              {idx < services.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-[1px] bg-white/10" />
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em]">
          Interactive Capability Catalog • Click to Explore Solutions
        </span>
      </div>
    </div>
  );
}
