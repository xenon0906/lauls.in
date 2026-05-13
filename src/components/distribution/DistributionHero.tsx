"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function DistributionHero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/lauls image/Screenshot 2026-05-12 at 8.23.33 PM.png"
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover object-center"
        />
        {/* Dark Overlay matching Home/About Hero */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/95 via-[#0A1628]/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto pt-24 pb-8 md:pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8 text-[#DCA54C] font-bold text-xs tracking-widest uppercase"
          >
            <div className="h-[2px] w-12 bg-[#DCA54C]" />
            Trusted Industrial Distribution
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-lg"
          >
            Premium Steel<br />Distribution Partner
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light max-w-2xl"
          >
            Lauls Ltd is the leading high-grade ferro alloys, steel rounds, wire rods, and precision tubes distributor across India with unmatched reliability and quality assurance.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-10 md:mb-20"
          >
            <Link href="/products" className="px-8 py-4 bg-[#DCA54C] text-[#0A1628] font-bold hover:bg-[#c5923b] transition-all text-sm flex items-center gap-2 group rounded-sm shadow-xl shadow-[#DCA54C]/20">
              Explore Products <ArrowRight size={16} className="text-[#0A1628] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#contact-form" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all text-sm rounded-sm">
              Request Quote
            </Link>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 pt-5 md:pt-8 border-t border-white/10 mt-auto"
          >
             <div className="flex flex-col">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">28+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Years Experience</div>
             </div>
             
             <div className="flex flex-col sm:border-l sm:border-white/10 sm:pl-8">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">500+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Global Clients</div>
             </div>
             
             <div className="flex flex-col col-span-2 sm:col-span-1 sm:border-l sm:border-white/10 sm:pl-8">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">50K+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Tons Delivered</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
