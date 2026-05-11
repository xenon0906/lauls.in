"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LogisticsHero() {
  return (
    <section className="relative w-full h-[100svh] min-h-[700px] flex flex-col justify-center overflow-hidden">
      {/* Immersive Background Layer */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_9993.JPG"
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
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6 md:mb-8 text-[#DCA54C] font-bold text-xs tracking-widest uppercase"
          >
            <div className="h-[2px] w-12 bg-[#DCA54C]" />
            National Scale & Reach
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight drop-shadow-lg"
          >
            Heavy Logistics<br />& Transportation
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-xl mb-8 md:mb-12 leading-relaxed font-light max-w-2xl"
          >
            Powering India&apos;s infrastructure backbone with precision multi-modal logistics. From dedicated highway fleets to heavy railway divisions and EV transport.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-10 md:mb-20"
          >
            <Link href="/logistics/details" className="px-8 py-4 bg-[#DCA54C] text-[#0A1628] font-bold hover:bg-[#c5923b] transition-all text-sm flex items-center gap-2 group rounded-sm shadow-xl shadow-[#DCA54C]/20 inline-flex">
              Explore Our Fleet <ArrowRight size={16} className="text-[#0A1628] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/10 hover:border-white/40 transition-all text-sm rounded-sm inline-block">
              Dispatch Inquiry
            </Link>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-16 pt-5 md:pt-8 border-t border-white/10 mt-auto"
          >
             <div className="flex flex-col">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">400+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Heavy Fleet Assets</div>
             </div>
             
             <div className="flex flex-col sm:border-l sm:border-white/10 sm:pl-8">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">1.2M</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Tons moved annually</div>
             </div>
             
             <div className="flex flex-col col-span-2 sm:col-span-1 sm:border-l sm:border-white/10 sm:pl-8">
               <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">12</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Distribution Hubs</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
