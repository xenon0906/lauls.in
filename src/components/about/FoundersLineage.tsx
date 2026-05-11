"use client";

import { motion } from "framer-motion";
import { Crown, Heart } from "lucide-react";
import Image from "next/image";

const founders = [
  {
    era: "Est. 1933",
    name: "Shri Girdhari Lal",
    role: "Patriarch & Visionary Founder",
    relation: "Grandfather Generation",
    portrait: "/images/team-group.jpg",
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
    portrait: "/images/team-group-2.jpg",
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
    portrait: "/images/abhay-gupta-new.jpg",
    bio: "Carrying the torch forward, the third generation has modernised operations across EV logistics, digital supply chains, and global ferro alloy distribution — preserving the family's 90-year reputation while steering Lauls into the future of Indian industry.",
    legacy: "Leading sustainability, EV fleet expansion and pan-India distribution growth.",
    accentColor: "#0A1628",
    bgColor: "#0A162810",
  },
];

export default function FoundersLineage() {
  return (
    <section className="relative bg-[#FDFAF6] border-y border-amber-100 pt-8 pb-20 md:pt-12 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-100 rounded-full shadow-sm mb-5">
              <Crown size={12} className="text-amber-600" />
              <span className="text-amber-700 font-display font-bold uppercase tracking-widest text-[10px]">The Family Behind the Legacy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-[#0A1628] tracking-tight">
              Family Behind the Legacy
            </h2>
          </div>
          <p className="text-gray-600 max-w-xl leading-relaxed">
            Three generations of industrial leadership, moving from trading roots into logistics, manufacturing, and future-ready distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {founders.map((founder, i) => (
            <motion.article
              key={founder.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white rounded-2xl border border-amber-100 shadow-sm overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-[#0A1628]">
                <Image
                  src={founder.portrait}
                  alt={founder.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/85 via-[#0A1628]/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
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

              <div className="p-6 md:p-7">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full" style={{ backgroundColor: founder.bgColor }}>
                  <Heart size={10} style={{ color: founder.accentColor }} />
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: founder.accentColor }}>{founder.relation}</span>
                </div>
                <p className="font-bold text-sm uppercase tracking-widest mb-4" style={{ color: founder.accentColor }}>
                  {founder.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {founder.bio}
                </p>
                <div className="flex gap-4 items-start p-4 rounded-xl border" style={{ borderColor: founder.accentColor + "30", backgroundColor: founder.accentColor + "08" }}>
                  <div className="w-1 min-h-[44px] rounded-full shrink-0 mt-1" style={{ backgroundColor: founder.accentColor }} />
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: founder.accentColor }}>
                      Key Legacy
                    </div>
                    <p className="text-[#0A1628] text-sm font-medium">{founder.legacy}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
