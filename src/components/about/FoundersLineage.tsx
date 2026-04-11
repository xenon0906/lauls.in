"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Crown, Heart, ChevronDown } from "lucide-react";

const founders = [
  {
    era: "Est. 1933",
    name: "Shri Girdhari Lal",
    role: "Patriarch & Visionary Founder",
    relation: "Grandfather Generation",
    portrait: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600&auto=format&fit=crop",
    bio: "Shri Girdhari Lal laid the first stone of what would become a 90-year industrial dynasty. Starting with a small trading post in Northern India, he built the foundational values of integrity, reliability, and long-term partnerships that still guide the company today.",
    legacy: "Founder of the original trading house that seeded the Lauls enterprise.",
    accentColor: "#b45309",
    bgColor: "#7c3d1210",
  },
  {
    era: "1960s – 1980s",
    name: "Shri Madan Lal",
    role: "Industrial Pioneer & Builder",
    relation: "Father's Generation",
    portrait: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
    bio: "Inheriting a sturdy foundation, Shri Madan Lal fearlessly scaled the enterprise into steel trading and logistics. His visionary decision to partner with national railways and steel mills during India's industrialisation era transformed a regional firm into a trusted national operator.",
    legacy: "Expanded into steel and logistics, establishing government and railway partnerships.",
    accentColor: "#DCA54C",
    bgColor: "#DCA54C10",
  },
  {
    era: "1990s – Present",
    name: "The Present Directors",
    role: "Third Generation Leadership",
    relation: "Current Generation",
    portrait: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Carrying the torch forward, the third generation has modernised operations across EV logistics, digital supply chains, and global ferro alloy distribution — preserving the family's 90-year reputation while steering Lauls into the future of Indian industry.",
    legacy: "Leading sustainability, EV fleet expansion and pan-India distribution growth.",
    accentColor: "#0A1628",
    bgColor: "#0A162810",
  },
];

export default function FoundersLineage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Sticky section spans 3 * 100vh. Calculate progress 0→1
      const scrolled = -top; // how many px the user has scrolled past the section top
      const totalScrollable = height - vh;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      // Map to 0, 1, 2
      const idx = Math.min(founders.length - 1, Math.floor(progress * founders.length));
      setActiveIdx(idx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const founder = founders[activeIdx];

  return (
    // Outer container: extra tall so scroll happens slowly
    <div
      ref={sectionRef}
      className="relative border-t border-amber-100"
      style={{ height: `${founders.length * 100}vh` }}
    >
      {/* Sticky Inner Panel */}
      <div className="sticky top-0 h-screen overflow-hidden bg-[#FDFAF6] flex flex-col">

        {/* Top Label */}
        <div className="absolute top-0 left-0 right-0 z-10 px-6 md:px-16 pt-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full shadow-sm">
            <Crown size={12} className="text-amber-600" />
            <span className="text-amber-700 font-display font-bold uppercase tracking-widest text-[10px]">The Family Behind the Legacy</span>
          </div>
          {/* Progress Dots */}
          <div className="flex items-center gap-2">
            {founders.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  i === activeIdx ? "w-6 h-2 bg-[#DCA54C]" : "w-2 h-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6 md:px-16 pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Portrait */}
              <div className="w-full lg:w-2/5 shrink-0">
                <div className="relative group">
                  {/* Decorative glow */}
                  <div
                    className="absolute -inset-6 rounded-3xl blur-2xl opacity-30"
                    style={{ backgroundColor: founder.accentColor }}
                  />
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl border-4 border-white max-w-sm mx-auto">
                    <img
                      src={founder.portrait}
                      alt={founder.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/85 via-transparent to-transparent" />

                    {/* Era badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div
                        className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full"
                        style={{ backgroundColor: founder.accentColor }}
                      >
                        <Crown size={10} className="text-white" />
                        <span className="text-white text-[9px] font-black uppercase tracking-widest">{founder.era}</span>
                      </div>
                      <h3 className="text-2xl font-display font-black text-white leading-tight drop-shadow">
                        {founder.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-3/5">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-amber-50 border border-amber-100 rounded-full">
                  <Heart size={10} className="text-amber-600" />
                  <span className="text-amber-700 text-[10px] font-bold uppercase tracking-widest">{founder.relation}</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-black text-[#0A1628] mb-2 leading-tight">
                  {founder.name}
                </h2>
                <p className="font-bold text-sm uppercase tracking-widest mb-8" style={{ color: founder.accentColor }}>
                  {founder.role}
                </p>

                <p className="text-gray-600 text-lg font-light leading-relaxed mb-10">
                  {founder.bio}
                </p>

                {/* Legacy callout */}
                <div className="flex gap-4 items-start p-5 rounded-2xl border" style={{ borderColor: founder.accentColor + "30", backgroundColor: founder.accentColor + "08" }}>
                  <div className="w-1 min-h-[44px] rounded-full shrink-0 mt-1" style={{ backgroundColor: founder.accentColor }} />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: founder.accentColor }}>
                      Key Legacy
                    </div>
                    <p className="text-[#0A1628] text-sm font-medium">{founder.legacy}</p>
                  </div>
                </div>

                {/* Generation counter */}
                <div className="mt-8 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {activeIdx + 1} / {founders.length} — Scroll to continue
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scroll hint at bottom */}
        {activeIdx < founders.length - 1 && (
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
          >
            <span className="text-[9px] font-bold uppercase tracking-widest">Scroll</span>
            <ChevronDown size={16} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
