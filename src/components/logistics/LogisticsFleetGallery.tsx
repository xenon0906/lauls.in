"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LogisticsFleetGallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1519003722216-16eed37d4576?q=80&w=2070&auto=format&fit=crop", label: "Road Logistics", href: "/logistics" },
    { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", label: "Rail Freight", href: "/logistics" },
    { src: "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop", label: "Electric Fleet", href: "/logistics" },
    { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", label: "Warehousing Hubs", href: "/logistics" }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-4 h-[60vh] min-h-[500px]">
          {images.map((img, idx) => (
            <Link key={idx} href={img.href} className="relative flex-1 group cursor-pointer h-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="w-full h-full rounded-2xl overflow-hidden"
              >
                <img 
                  src={img.src} 
                  alt={img.label} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-8 left-6 md:left-8">
                  <span className="text-white font-display font-bold text-xl md:text-2xl tracking-tight drop-shadow-lg">
                    {img.label}
                  </span>
                  <div className="w-0 h-1 bg-[#DCA54C] mt-2 group-hover:w-12 transition-all duration-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
