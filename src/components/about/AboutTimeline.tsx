"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const milestones = [
  { 
    year: "1933",
    title: "Foundation", 
    desc: "Began as a trusted industrial trading house, setting the groundwork for a multi-generation infrastructure enterprise.",
    image: "/images/IMG_9877.JPG",
    accent: "#0A1628"
  },
  { 
    year: "2005", 
    title: "First Plant", 
    desc: "Expanded into heavy alloy steel distribution, becoming a key TATA associated supplier across India.", 
    image: "/images/IMG_9944.JPG",
    accent: "#0A1628"
  },
  { 
    year: "2012", 
    title: "WAREX Gold", 
    desc: "Achieved WAREX Gold certification, cementing as an approved vendor for critical supply chains.", 
    image: "/images/IMG_9844.JPG",
    accent: "#0A1628"
  },
  { 
    year: "2026", 
    title: "Global Expansion", 
    point: true, 
    desc: "Launching EV-powered fleet and expanding our global logistics, fulfilling massive national contracts.", 
    image: "/images/IMG_0028.JPG",
    accent: "#DCA54C"
  },
];

function TimelineCard({ ms, idx }: { ms: typeof milestones[0]; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center group"
    >
      {/* Animated Node with ripple */}
      <div className="relative mb-6 flex items-center justify-center">
        {ms.point && (
          <>
            <div className="absolute w-24 h-24 rounded-full bg-[#DCA54C]/20 animate-ping" />
            <div className="absolute w-16 h-16 rounded-full bg-[#DCA54C]/30 animate-pulse" />
          </>
        )}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-14 h-14 rounded-full flex items-center justify-center relative z-10 shadow-xl ${
            ms.point 
              ? 'bg-[#DCA54C] text-white shadow-[0_0_30px_#DCA54C50]' 
              : 'bg-[#0A1628] text-white'
          }`}
        >
          <div className="w-4 h-4 rounded-full border-2 border-white opacity-60" />
        </motion.div>
      </div>

      {/* Year */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
        className="text-2xl font-display font-black text-[#0A1628]"
      >
        {ms.year}
      </motion.h3>

      <h4 className="text-sm font-bold text-[#DCA54C] uppercase tracking-widest mt-1 mb-4">{ms.title}</h4>
      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow max-w-[250px]">{ms.desc}</p>
      
      {/* Card Image with hover reveal */}
      <div className="w-full h-[140px] rounded-xl overflow-hidden mt-auto border border-gray-100 shadow-sm group-hover:shadow-xl transition-shadow duration-500 relative">
        <Image
          src={ms.image}
          alt={ms.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
        />
      </div>
    </motion.div>
  );
}

export default function AboutTimeline() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="bg-white py-24 w-full border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Animated Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center w-full max-w-2xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#DCA54C]/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
            <span className="text-[#DCA54C] font-display font-bold uppercase tracking-widest text-[10px]">Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628]">
            Three Decades of Progress
          </h2>
          <p className="text-gray-500 mt-4 font-light leading-relaxed max-w-lg mx-auto">
            A journey built on trust, precision, and an unrelenting pursuit of industrial excellence.
          </p>
        </motion.div>

        {/* Animated connecting line */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-0.5 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-linear-to-r from-[#DCA54C]/30 via-[#DCA54C] to-[#DCA54C]/30 origin-left"
            />
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((ms, idx) => (
              <TimelineCard key={idx} ms={ms} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
