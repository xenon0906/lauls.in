"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Immersive Background Layer - Corporate/Headquarters theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop")' }}
      >
        {/* Dark Overlay matching other Heroes to guarantee Navbar visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/95 via-[#0A1628]/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6 text-[#DCA54C] font-bold text-xs tracking-widest uppercase"
        >
          <div className="h-[2px] w-8 bg-[#DCA54C]" />
          Global Inquiries
          <div className="h-[2px] w-8 bg-[#DCA54C]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg"
        >
          Get in Touch
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl font-light"
        >
          Whether you need precision steel engineering, a dedicated logistics pipeline, or general distribution queries—our command center is standing by.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4 }}
        >
          <a href="#locations" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#DCA54C] hover:border-[#DCA54C] hover:text-[#0A1628] transition-all animate-bounce">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
