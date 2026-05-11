"use client";

import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "30+", subtext: "Active Leadership" },
  { label: "Successful Projects", value: "500+", subtext: "Pan India" },
  { label: "Trusted Clients", value: "150+", subtext: "Across Verticals" },
  { label: "Countries Served", value: "12", subtext: "Global Footprint" },
];

const certs = [
  { name: "RDSO Lucknow", detail: "Approved Vendor", icon: "https://upload.wikimedia.org/wikipedia/en/2/23/RDSO_Logo.png" },
  { name: "ISO 9001:2015", detail: "Quality Management", icon: "https://www.iso.org/files/live/sites/isoorg/files/archive/iso_logo.png" },
  { name: "ISO 14001:2015", detail: "Env Management", icon: "https://www.iso.org/files/live/sites/isoorg/files/archive/iso_logo.png" },
  { name: "OHSAS 18001:2007", detail: "Safety Management", icon: "https://www.iso.org/files/live/sites/isoorg/files/archive/iso_logo.png" },
];

export default function Trust() {
  return (
    <SectionWrapper id="trust" className="bg-primary overflow-hidden relative">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Trusted by India&apos;s Leading <br />
            <span className="text-highlight">Railways & Steel Industries</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto">
            Our unwavering commitment to quality and safety is backed by world-class certifications and decades of field-proven results.
          </p>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-8 glass rounded-3xl"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-highlight mb-2">{stat.value}</div>
              <div className="text-white font-bold text-sm tracking-wider uppercase mb-1">{stat.label}</div>
              <div className="text-white/30 text-[10px] uppercase font-bold tracking-widest">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {certs.map((cert, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-highlight/50 transition-all">
              <div className="w-16 h-16 mb-4 flex items-center justify-center filter grayscale group-hover:grayscale-0 transition-all">
                {/* Fallback to text if icon does not load or use a generic styled badge */}
                <div className="w-12 h-12 rounded-full border-2 border-highlight flex items-center justify-center font-display font-bold text-highlight text-xs text-center p-1 leading-none">
                  GOLD <br/> SEAL
                </div>
              </div>
              <span className="text-white font-bold text-sm text-center">{cert.name}</span>
              <span className="text-highlight/60 text-[10px] uppercase font-bold mt-1">{cert.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
