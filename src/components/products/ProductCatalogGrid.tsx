"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const allProducts = [
  // Ferro Alloys
  { name: "Ferro Manganese", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop", href: "/products/ferro-alloys" },
  { name: "Ferro Chrome", image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=200&auto=format&fit=crop", href: "/products/ferro-alloys" },
  { name: "Ferro Silicon", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=200&auto=format&fit=crop", href: "/products/ferro-alloys" },
  { name: "Silico Manganese", image: "https://images.unsplash.com/photo-1536647960714-469b8c0da9aa?q=80&w=200&auto=format&fit=crop", href: "/products/ferro-alloys" },
  
  // Wire Rods
  { name: "Alloy Steel Wire Rods", image: "https://images.unsplash.com/photo-1587293852726-694762cf7520?q=80&w=200&auto=format&fit=crop", href: "/products/wire-rods" },
  { name: "Mild Steel Wire Rods", image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=200&auto=format&fit=crop", href: "/products/wire-rods" },
  { name: "Stainless Steel Wire Rods", image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=200&auto=format&fit=crop", href: "/products/wire-rods" },

  // Steel Rounds
  { name: "Alloy Steel Rounds", image: "https://images.unsplash.com/photo-1621808003444-24eebacb5fb8?q=80&w=200&auto=format&fit=crop", href: "/products/steel-rounds" },
  { name: "Mild Steel Rounds", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=200&auto=format&fit=crop", href: "/products/steel-rounds" },

  // Precision Tubes
  { name: "ERW Steel Tubes", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=200&auto=format&fit=crop", href: "/products/precision-tubes" },
  { name: "Square & Rectangular Hollow Sections", image: "https://images.unsplash.com/photo-1565439390234-5858cf85aeb9?q=80&w=200&auto=format&fit=crop", href: "/products/precision-tubes" },
  
  // Add an extra to make 12 grid items nicely divisible by 2, 3, or 4
  { name: "Custom Forged Ingots", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop", href: "/contact" },
];

export default function ProductCatalogGrid() {
  return (
    <div className="absolute top-full left-0 w-full bg-[#18181A] pt-8 pb-12 border-t border-white/5 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link href="/products" className="inline-flex items-center gap-2 mb-10 border-b border-white/10 pb-2 hover:border-[#DCA54C] transition-colors group">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-[#DCA54C] tracking-tight transition-colors">
            View All Products
          </h2>
          <ChevronRight className="text-white mt-1 group-hover:text-[#DCA54C] transition-colors" size={28} />
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {allProducts.map((product, idx) => (
            <Link key={idx} href={product.href} className="flex flex-row items-center gap-6 group">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.05 }}
                 className="relative shrink-0 w-20 h-20 rounded-md overflow-hidden ring-1 ring-white/10 group-hover:ring-[#DCA54C] transition-all"
               >
                 <img 
                   src={product.image} 
                   alt={product.name}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
               </motion.div>
               <div className="flex-1">
                 <h3 className="text-sm font-bold text-[#DCA54C] group-hover:text-white transition-colors leading-snug">
                   {product.name}
                 </h3>
               </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
