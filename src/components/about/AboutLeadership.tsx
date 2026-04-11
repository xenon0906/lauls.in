"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const executives = [
  { 
    id: "anand",
    name: "Anand Kumar Mishra", 
    role: "Managing Director", 
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
    quote: "We don't just engineer logistics — we engineer the confidence that keeps India moving forward.",
    bio: "With over 30 years of experience in heavy infrastructure, Mr. Mishra has transformed Lauls Ltd from a regional player into a nationally recognized conglomerate spanning four heavy business verticals.",
    stats: ["30+ Yrs Exp", "Visionary", "Strategy"]
  },
  { 
    id: "rajesh",
    name: "Rajesh Verma", 
    role: "Head of Operations", 
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    quote: "Efficiency is the lifeblood of our supply chain. We treat every delivery as mission-critical.",
    bio: "Rajesh drives excellence in logistics operations across India. With 20+ years of experience in industrial management, he ensures flawless execution of heavy drop-shipments and fleet sustainability.",
    stats: ["20+ Yrs Exp", "Logistics", "Operations"]
  },
  { 
    id: "priya",
    name: "Priya Sharma", 
    role: "Head of Distribution & Quality", 
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote: "Standardization isn't enough; we aim to redefine what quality means in the steel sector.",
    bio: "Priya oversees all critical engineering standards across our alloy steel distribution network, ensuring rigid compliance with ISO standards and TATA structural tolerances.",
    stats: ["ISO Auditing", "TATA Standards", "Metallurgy"]
  },
  { 
    id: "sunil",
    name: "Sunil Patel", 
    role: "Head of EV Technology", 
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    quote: "The future of heavy transport relies entirely on sustainable, data-driven electric fleets.",
    bio: "Sunil spearheads the technological transition of our logistics arm, focusing on integrating electric trucks and advanced algorithmic routing into our massive pan-India operational grid.",
    stats: ["EV Transition", "Algorithmic Routing", "Sustainability"]
  },
];

export default function AboutLeadership() {
  const [activeLeader, setActiveLeader] = useState(executives[0]);

  // Filter out the active leader to show the remaining 3 as thumbnails
  const remainingLeaders = executives.filter(exec => exec.id !== activeLeader.id);

  return (
    <section className="bg-[#f8fafc] py-24 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#DCA54C]/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
            <span className="text-[#DCA54C] font-display font-bold uppercase tracking-widest text-[10px]">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-6">
            The People Behind the Legacy
          </h2>
          <p className="text-gray-500">
            Visionary leaders driving Lauls Ltd's mission to strengthen India's infrastructure.
          </p>
        </div>

        {/* Main Leader Feature with AnimatePresence for smooth swapping */}
        <div className="mb-12 shadow-2xl rounded-2xl overflow-hidden bg-white relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeLeader.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row"
            >
              <div className="lg:w-2/5 h-[400px] lg:h-[500px] relative">
                <img 
                  src={activeLeader.image} 
                  alt={activeLeader.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white font-display font-bold text-2xl">{activeLeader.name}</h3>
                  <p className="text-[#DCA54C] text-sm uppercase tracking-widest font-bold mt-1">{activeLeader.role}</p>
                </div>
              </div>
              <div className="lg:w-3/5 bg-[#0A1628] p-10 lg:p-16 flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-relaxed">
                  "{activeLeader.quote}"
                </h4>
                <p className="text-white/60 mb-10 leading-relaxed font-light">
                  {activeLeader.bio}
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  {activeLeader.stats.map((stat, i) => (
                    <div key={i} className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-white/90 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-inner shadow-white/5">
                      {stat}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-[#DCA54C] text-[#0A1628] font-bold rounded-lg text-sm shadow-xl shadow-[#DCA54C]/20 hover:bg-[#DCA54C]/90 transition-colors">
                    Contact us today
                  </button>
                  <button className="px-6 py-3 border border-white/20 text-white font-bold rounded-lg text-sm hover:bg-white/10 transition-colors">
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3 Secondary Leaders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {remainingLeaders.map((member) => (
              <motion.div 
                layout
                key={member.id} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setActiveLeader(member)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col group cursor-pointer hover:border-[#DCA54C]/50 transition-colors"
              >
                <div className="h-[250px] relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1628]/90 to-transparent p-6">
                    <h4 className="text-white font-display font-bold text-xl">{member.name}</h4>
                    <p className="text-white/70 text-xs uppercase tracking-widest font-bold mt-1">{member.role}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                     {member.bio}
                  </p>
                  <button className="text-[#0A1628] font-bold text-[10px] uppercase tracking-widest group-hover:text-[#DCA54C] transition-colors w-fit pb-1 border-b-2 border-transparent group-hover:border-[#DCA54C]">
                    Click to View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
