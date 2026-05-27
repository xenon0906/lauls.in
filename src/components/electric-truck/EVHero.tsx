"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cloudinary } from "@/utils/cloudinary";

export default function EVHero() {
  const router = useRouter();
  return (
    <section className="relative w-full min-h-[100svh] lg:min-h-[100svh] lg:min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Immersive Background Layer - EV/Green Logistics */}
      <div className="absolute inset-0">
        <Image
          src={cloudinary("lauls image/image copy 10.png")}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
        {/* Dark Overlay with a subtle green tint for EV */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/95 via-[#0A1628]/80 to-emerald-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto pt-[104px] pb-8 md:pb-12 flex-1 flex flex-col">
        <div className="max-w-4xl my-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8 text-emerald-400 font-bold text-xs tracking-widest uppercase"
          >
            <div className="h-[2px] w-12 bg-emerald-400" />
            Sustainable Supply Chains
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-lg"
          >
            Zero-Emission<br />Electric Fleet
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light max-w-2xl"
          >
            Pioneering sustainable heavy industrial logistics with zero-emission electric fleets for regional transport, and clean LNG/CNG corridors for green long-haul operations.
          </motion.p>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-10 md:mb-20"
          >
            <a
              href="#ev-details"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("ev-details");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all text-sm flex items-center gap-2 group rounded-sm shadow-xl shadow-emerald-500/20 cursor-pointer"
            >
              Explore EV Capabilities <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                router.replace("/electric-truck?product=truck", { scroll: false });
                const target = document.getElementById("contact-form");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all text-sm rounded-sm cursor-pointer inline-flex items-center"
            >
              EV Inquiry
            </a>
          </motion.div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.5 }}
           className="max-w-4xl w-full grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 pt-5 md:pt-8 border-t border-white/10 mt-auto"
        >
           <div className="flex flex-col">
             <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">0g</div>
             <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Tailpipe Emissions</div>
           </div>

           <div className="flex flex-col sm:border-l sm:border-white/10 sm:pl-8">
             <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">40T</div>
             <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Max Gross Payload</div>
           </div>

           <div className="flex flex-col col-span-2 sm:col-span-1 sm:border-l sm:border-white/10 sm:pl-8">
             <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">250km</div>
             <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Operational Range</div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
