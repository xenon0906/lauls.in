"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[65vh] bg-[#0A1628] overflow-hidden flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/40 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col pt-10">
         <motion.div 
            initial={{ y: 40, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
         >
            <div className="flex items-center gap-4 mb-6 text-[#DCA54C] text-xs font-bold tracking-widest uppercase">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <span>&gt;</span>
              <span className="text-white">Contact Us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6 tracking-tight">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-light leading-relaxed">
              We are ready to build India's future together. Connect with our dedicated departments for logistics, distribution, and manufacturing inquiries.
            </p>
         </motion.div>
      </div>
    </section>
  );
}
