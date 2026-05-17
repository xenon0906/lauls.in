"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Crown, Heart } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const founders = [
  {
    era: "Est. 1933",
    name: "Shri Girdhari Lal",
    role: "Patriarch & Visionary Founder",
    relation: "Grandfather Generation",
    portrait: "/images/founders.png",
    bio: "Shri Girdhari Lal laid the first stone of what would become a 90-year industrial dynasty. Starting with a small trading post in Northern India, he built the foundational values of integrity, reliability, and long-term partnerships that still guide the company today.",
    legacy: "Founder of the original trading house that seeded the Lauls enterprise.",
    accentColor: "#DCA54C", 
    shadowColor: "rgba(220, 165, 76, 0.3)",
  },
  {
    era: "1960s – 1980s",
    name: "Shri Madan Lal",
    role: "Industrial Pioneer & Builder",
    relation: "Father's Generation",
    portrait: "/images/sudhir.png",
    bio: "Inheriting a sturdy foundation, Shri Madan Lal fearlessly scaled the enterprise into steel trading and logistics. His visionary decision to partner with national railways and steel mills during India's industrialisation era transformed a regional firm into a trusted national operator.",
    legacy: "Expanded into steel and logistics, establishing government and railway partnerships.",
    accentColor: "#DCA54C",
    shadowColor: "rgba(220, 165, 76, 0.3)",
  },
  {
    era: "1990s – Present",
    name: "The Present Directors",
    role: "Third Generation Leadership",
    relation: "Current Generation",
    portrait: "/images/atirav.png",
    bio: "Carrying the torch forward, the third generation has modernised operations across EV logistics, digital supply chains, and global ferro alloy distribution — preserving the family's 90-year reputation while steering Lauls into the future of Indian industry.",
    legacy: "Leading sustainability, EV fleet expansion and pan-India distribution growth.",
    accentColor: "#0A1628", 
    shadowColor: "rgba(10, 22, 40, 0.2)",
  },
];

export default function FoundersLineage() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Horizontal movement track (3 sections = 300%. Move -66.6666% to see the 3rd section)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6666%"]);

  // Dynamic Pagination Dots
  const dot1Width = useTransform(scrollYProgress, [0, 0.3], ["24px", "8px"]);
  const dot1Opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
  
  const dot2Width = useTransform(scrollYProgress, [0.2, 0.5, 0.8], ["8px", "24px", "8px"]);
  const dot2Opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3]);
  
  const dot3Width = useTransform(scrollYProgress, [0.7, 1], ["8px", "24px"]);
  const dot3Opacity = useTransform(scrollYProgress, [0.7, 1], [0.3, 1]);

  return (
    <section id="heritage" ref={targetRef} className="relative bg-[#FFFCF8] h-[300vh] w-full">
      {/* Sticky container that pins to the screen */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden pt-24 lg:pt-32 pb-12 w-full max-w-[100vw]">
        
        {/* Fixed Header with Badge and Dots (Always visible at the top) */}
        <div className="w-full max-w-[1200px] mx-auto px-6 lg:px-12 flex justify-between items-center shrink-0 z-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full shadow-sm">
            <Crown size={12} className="text-amber-600" />
            <span className="text-amber-700 font-display font-bold uppercase tracking-widest text-[10px]">The Family Behind the Legacy</span>
          </div>

          <div className="flex gap-2 items-center">
            <motion.div style={{ width: dot1Width, opacity: dot1Opacity }} className="h-2 rounded-full bg-[#DCA54C]" />
            <motion.div style={{ width: dot2Width, opacity: dot2Opacity }} className="h-2 rounded-full bg-[#DCA54C]" />
            <motion.div style={{ width: dot3Width, opacity: dot3Opacity }} className="h-2 rounded-full bg-[#DCA54C]" />
          </div>
        </div>

        {/* Horizontal moving track */}
        <div className="flex-1 flex items-start lg:items-center relative z-10 w-full mt-10 lg:mt-0">
          {/* Track width is 300% of parent, shrink-0 prevents Flexbox from squishing it */}
          <motion.div style={{ x }} className="flex w-[300%] h-full shrink-0">
            
            {founders.map((founder, i) => (
              <div 
                key={founder.name}
                // Each frame is 1/3 of the 300% track = 100% of screen
                className="w-1/3 h-full flex items-start lg:items-center justify-center px-6 lg:px-12 shrink-0"
              >
                {/* ALWAYS flex-row so image is on the left */}
                <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                  
                  {/* Image Side - Elegant Portrait Card */}
                  <div className="w-full max-w-[320px] lg:max-w-[360px] shrink-0 relative">
                    {/* The glowing soft shadow behind the card */}
                    <div 
                      className="absolute inset-0 rounded-3xl z-0" 
                      style={{ boxShadow: `0 0 80px 20px ${founder.shadowColor}` }} 
                    />
                    
                    <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden border-[6px] lg:border-[8px] border-white z-10 bg-white">
                      <Image
                        src={founder.portrait}
                        alt={founder.name}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 1024px) 100vw, 360px"
                        className="object-cover object-top"
                      />
                      
                      {/* Dark Gradient Overlay for text readability (bottom half only) */}
                      <div className="absolute inset-0 top-1/2 bg-linear-to-t from-black/80 to-transparent" />
                      
                      {/* Era Badge & Name */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md mb-2" style={{ backgroundColor: founder.accentColor }}>
                          <span className="text-white text-[10px] font-black uppercase tracking-widest">{founder.era}</span>
                        </div>
                        <h3 className="text-2xl md:text-[28px] font-display font-black text-white drop-shadow-md leading-tight">
                          {founder.name}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="w-full lg:flex-1 flex flex-col justify-center">
                    {/* Generation Tag */}
                    <div className="inline-flex items-center gap-2 mb-4 lg:mb-6 px-4 py-1.5 rounded-full border w-fit" style={{ borderColor: founder.accentColor + '40', backgroundColor: founder.accentColor + '10' }}>
                      <Heart size={12} style={{ color: founder.accentColor }} />
                      <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: founder.accentColor }}>
                        {founder.relation}
                      </span>
                    </div>

                    {/* Name & Role */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-[#0A1628] mb-3 lg:mb-4 tracking-tight leading-none">
                      {founder.name}
                    </h2>
                    <p className="font-bold text-xs md:text-sm uppercase tracking-widest mb-6 lg:mb-8" style={{ color: founder.accentColor }}>
                      {founder.role}
                    </p>

                    {/* Bio */}
                    <p className="text-gray-600 text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-10 max-w-2xl">
                      {founder.bio}
                    </p>

                    {/* Legacy Box */}
                    <div className="relative pl-6 py-2 border-l-4" style={{ borderColor: founder.accentColor }}>
                      <div className="absolute inset-0 right-auto w-full max-w-[400px] opacity-[0.08] rounded-r-xl" style={{ backgroundColor: founder.accentColor, zIndex: -1 }} />
                      <div className="text-[10px] font-black uppercase tracking-widest mb-2" style={{ color: founder.accentColor }}>
                        Key Legacy
                      </div>
                      <p className="text-[#0A1628] text-sm md:text-base lg:text-lg font-medium max-w-xl">
                        {founder.legacy}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
