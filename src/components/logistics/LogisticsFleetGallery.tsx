"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function LogisticsFleetGallery() {
  const images = [
    { src: "/images/stockyard.jpg", label: "Road Logistics", href: "/logistics" },
    { src: "/images/warehouse.jpg", label: "Rail Freight", href: "/logistics" },
    { src: "/images/manufacturing.jpg", label: "Electric Fleet", href: "/logistics" },
    { src: "/images/trading.jpg", label: "Warehousing Hubs", href: "/logistics" }
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
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
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
