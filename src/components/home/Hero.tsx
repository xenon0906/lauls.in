"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, ChevronDown, Mail } from "lucide-react";
import Link from 'next/link';

const slides = [
  {
    title: "About Lauls: \n90 Years of \nExcellence",
    highlight: "90 Years",
    subtext: "Founded in 1933, Lauls Ltd. has evolved from a trading house into Northern India's leading industrial conglomerate across steel, logistics, and manufacturing.",
    image: "/hero/1.jpg",
    stats: [
      { label: "Projects", value: "500+" },
      { label: "Clients", value: "150+" },
      { label: "Countries", value: "12" },
      { label: "Years", value: "90+" },
    ]
  },
  {
    title: "Leading Ferro Alloy \nDistribution \nin Northern India",
    highlight: "Ferro Alloy",
    subtext: "Sole authorized distributor of TATA Steel Ferro Alloys & Minerals. Powering the steel industry with quality and reliability.",
    image: "/hero/2.jpg",
    stats: [
      { label: "Annual Distribution", value: "15K MT" },
      { label: "TATA Steel Partner", value: "Sole" },
      { label: "Market Presence", value: "North India" },
      { label: "Experience", value: "30+ Yrs" },
    ]
  },
  {
    title: "World-Class \nLogistics & \nWarehousing",
    highlight: "Logistics",
    subtext: "Operating TATA Steel stockyards with WAREX GOLD certification. Precision in handling, safety in transportation.",
    image: "/hero/3.jpg",
    stats: [
      { label: "Steel Handling", value: "1M MT" },
      { label: "Warehousing", value: "Certified Gold" },
      { label: "Transportation", value: "500K MT" },
      { label: "Clients", value: "Top Tier" },
    ]
  },
  {
    title: "Pioneering \nSustainable \nElectric Trucking",
    highlight: "Electric Trucking",
    subtext: "Transitioning to a greener future with our electric truck fleet. Logistics engineered for sustainability and efficiency.",
    image: "/hero/4.jpg",
    stats: [
      { label: "Zero Emission", value: "100%" },
      { label: "Sustainable", value: "Eco-Friendly" },
      { label: "Future Ready", value: "Innovation" },
      { label: "Leadership", value: "Driven" },
    ]
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[750px] overflow-hidden bg-primary flex flex-col pt-24 pb-8">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlays optimized for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/95 lg:from-[#0A1628]/90 via-[#0A1628]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-[2px] w-12 bg-highlight" />
              <span className="text-highlight font-display font-medium tracking-[0.2em] uppercase text-xs md:text-sm">
                Established 1933 • RDSO Certified
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white leading-[1.15] tracking-tight mb-8">
              {slides[currentSlide].title.split('\n').map((line, lineIndex) => (
                <motion.span 
                  key={lineIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (lineIndex * 0.15), duration: 0.6 }}
                  className="block"
                >
                  {line.split(slides[currentSlide].highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-highlight font-bold">{slides[currentSlide].highlight}</span>
                      )}
                    </span>
                  ))}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-base md:text-lg lg:text-xl text-white/80 max-w-xl mb-10 leading-relaxed font-light"
            >
              {slides[currentSlide].subtext}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-medium rounded-lg flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-accent/20">
                Explore Our Solutions <ArrowRight size={20} />
              </button>
              <Link href="/contact" className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-medium rounded-lg flex items-center gap-3 transition-all group backdrop-blur-sm">
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                  <Mail size={14} className="ml-1" />
                </span>
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Stats Grid Overlay - Pinned to bottom within hero */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 mt-auto pb-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={`stats-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/10"
          >
            {slides[currentSlide].stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1 pr-6 border-r border-white/5 last:border-r-0">
                <span className="text-3xl md:text-4xl font-display font-black text-highlight">{stat.value}</span>
                <span className="text-xs text-white/60 font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 right-6 md:right-12 flex flex-col items-center gap-2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={24} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators (Dots) - Much larger clickable area */}
      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="group relative flex items-center justify-end py-4 px-2 cursor-pointer"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span className={`absolute right-14 text-[10px] font-bold tracking-widest uppercase transition-all duration-300 whitespace-nowrap ${
              currentSlide === idx ? "opacity-100 text-white translate-x-0" : "opacity-0 text-white/30 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white/60"
            }`}>
              {idx === 0 ? "About Lauls" : idx === 1 ? "Steel Distribution" : idx === 2 ? "Logistics" : "Electric Truck"}
            </span>
            <div className={`h-[3px] rounded-full transition-all duration-500 ${
              currentSlide === idx ? "w-12 md:w-16 bg-highlight shadow-[0_0_8px_rgba(245,158,11,0.6)]" : "w-6 md:w-8 bg-white/30 group-hover:bg-white/60"
            }`} />
          </button>
        ))}
      </div>
    </section>
  );
}
