"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, Share2 } from "lucide-react";
import Image from "next/image";

export default function LogisticsDetailsHero() {
  return (
    <section className="relative w-full pt-32 pb-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Blog Meta Data */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
            <span className="text-[#DCA54C]">Logistics & Fleet</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Oct 12, 2024</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 Min Read</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-display font-black text-[#0A1628] mb-8 tracking-tight leading-tight">
            Architecting India’s Heavy Duty Backbone: A Look Inside Lauls Operations
          </h1>
          
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12">
            Delivering precision multi-modal logistics across India with a diverse fleet of 400+ assets, from heavy commercial vehicles to next-generation electric trucks.
          </p>

          {/* Author & Share */}
          <div className="flex items-center justify-between py-6 border-y border-gray-100 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0A1628] rounded-full flex items-center justify-center text-[#DCA54C] font-bold font-display shadow-md">
                L
              </div>
              <div>
                <div className="font-bold text-[#0A1628]">Lauls Editorial Team</div>
                <div className="text-sm text-gray-500">Corporate Infrastructure Division</div>
              </div>
            </div>
            
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#0A1628] hover:border-[#0A1628] transition-all">
              <Share2 size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Featured Cover Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden shadow-2xl bg-[#0A1628]">
          <Image
            src="/images/stockyard-lauls.jpg"
            alt="Lauls Fleet Cover"
            fill
            className="object-cover object-center opacity-90"
          />
        </div>
      </motion.div>
    </section>
  );
}
