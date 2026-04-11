"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function EVHero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Immersive Background Layer - using an EV/Green Logistics image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop")' }}
      >
        {/* Dark Overlay with a subtle green tint for EV */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/80 to-emerald-900/40" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8 text-emerald-400 font-bold text-xs tracking-widest uppercase"
          >
            <div className="h-[2px] w-12 bg-emerald-400" />
            Sustainable Supply Chains
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-lg"
          >
            Zero-Emission<br />Electric Fleet
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl"
          >
            Pioneering the largest private rollout of heavy-duty electric commercial vehicles in India. We are decarbonizing the industrial backbone without compromising on payload capacity or range.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4 mb-20"
          >
            <button className="px-8 py-4 bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-all text-sm flex items-center gap-2 group rounded-sm shadow-xl shadow-emerald-500/20">
              Explore EV Capabilities <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 pt-8 border-t border-white/10"
          >
             <div className="flex flex-col">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">0g</div>
               <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Tailpipe Emissions</div>
             </div>
             
             <div className="flex flex-col border-l border-white/10 pl-8">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">40T</div>
               <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Max Gross Payload</div>
             </div>
             
             <div className="flex flex-col border-l border-white/10 pl-8">
               <div className="text-4xl lg:text-5xl font-display font-black text-white drop-shadow-md">250km</div>
               <div className="text-emerald-400 text-[10px] mt-2 uppercase tracking-widest font-bold">Operational Range</div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
