"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center pt-24 pb-10">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/IMG_9918.JPG"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Overlays optimized for text legibility */}
        <div className="absolute inset-x-0 inset-y-0 bg-linear-to-r from-[#0A1628] lg:from-[#0A1628]/95 via-[#0A1628]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            We Build What <br />
            <span className="text-[#DCA54C]">India Runs On.</span>
          </motion.h1>
          
        </div>
      </div>

       {/* Stats Grid - Moved exactly like home hero */}
       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto border-t border-white/10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8"
          >
             <div>
               <div className="text-3xl md:text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight whitespace-nowrap">30+</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Years</div>
             </div>
             <div>
               <div className="text-3xl md:text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight whitespace-nowrap">500+</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Projects</div>
             </div>
             <div>
               <div className="text-3xl md:text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight whitespace-nowrap">4</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Verticals</div>
             </div>
             <div>
               <div className="text-3xl md:text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight whitespace-nowrap">12</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Hubs</div>
             </div>
          </motion.div>
       </div>
    </section>
  );
}
