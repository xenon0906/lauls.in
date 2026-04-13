"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CSRHero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive Background Layer - using a green/nature or community focused image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/savan.jpg")' }}
      >
        {/* Dark Overlay matching Home/About Hero */}
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/90 via-[#0A1628]/60 to-[#0A1628]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8 text-[#DCA54C] font-bold text-xs tracking-widest uppercase"
          >
            <div className="h-[2px] w-12 bg-[#DCA54C]" />
            Corporate Social Responsibility
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
          >
            Building Beyond<br />Business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl"
          >
            At Lauls Ltd, we believe true industry leadership means taking uncompromising responsibility for our communities, our environment, and our collective future in India.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-20"
          >
            <button className="px-8 py-4 bg-[#DCA54C] text-[#0A1628] font-bold hover:bg-[#c5923b] transition-all text-sm flex items-center gap-2 group rounded-sm shadow-xl shadow-[#DCA54C]/20">
              Read CSR Report <ArrowRight size={16} className="text-[#0A1628] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/10"
          >
             <div className="flex flex-col">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">₹5Cr+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Annual CSR Investment</div>
             </div>
             
             <div className="flex flex-col border-l border-white/10 pl-8">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">10K+</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Lives Impacted</div>
             </div>
             
             <div className="flex flex-col border-l border-white/10 pl-8">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">2M</div>
               <div className="text-[#DCA54C] text-[10px] mt-2 uppercase tracking-widest font-bold">Trees Planted</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
