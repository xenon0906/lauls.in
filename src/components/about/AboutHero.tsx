"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] overflow-hidden flex flex-col justify-center pt-24 pb-12">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/hero-banner.jpg)` }}
        />
        {/* Dark Overlays optimized for text legibility */}
        <div className="absolute inset-x-0 inset-y-0 bg-linear-to-r from-[#0A1628] lg:from-[#0A1628]/95 via-[#0A1628]/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-10 h-10 bg-[#DCA54C] rounded-lg flex items-center justify-center font-display font-bold text-white text-xl shadow-lg shadow-[#DCA54C]/20">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-white/60 text-[8px] tracking-[0.2em] font-bold uppercase leading-none">Established</span>
              <span className="text-[#DCA54C] text-[10px] tracking-widest font-bold uppercase leading-none mt-1">in 1994</span>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-[1.1] tracking-tight"
          >
            We Build What <br />
            <span className="text-[#DCA54C]">India Runs On.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl max-w-lg mb-12 leading-relaxed"
          >
            Three decades of engineering excellence across logistics, electric trucks, Fe alloy distribution, and alloy steel distribution — powering a nation in motion.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-[#DCA54C] text-[#0A1628] font-bold rounded-lg hover:bg-[#DCA54C]/90 transition-all text-sm shadow-xl shadow-[#DCA54C]/20">
              Discover Our Story
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all text-sm">
              View Milestones
            </button>
          </motion.div>
        </div>
      </div>

       {/* Stats Grid - Moved exactly like home hero */}
       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto border-t border-white/10">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
             <div>
               <div className="text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight">30+</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Years</div>
             </div>
             <div>
               <div className="text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight">500+</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Projects</div>
             </div>
             <div>
               <div className="text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight">4</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Verticals</div>
             </div>
             <div>
               <div className="text-4xl font-display font-black text-[#DCA54C] mb-1 tracking-tight">12</div>
               <div className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Hubs</div>
             </div>
          </motion.div>
       </div>
    </section>
  );
}
