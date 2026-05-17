"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const executives = [
  {
    id: "abhay",
    name: "Mr. Abhay Sagar Gupta",
    role: "Director In-Charge",
    image: "/images/abhay.png",
    quote: "Our strength lies in building enduring partnerships and delivering consistent value across every vertical we operate in.",
    bio: "With over 30 years of leadership, Mr. Abhay Sagar Gupta has steered Lauls Ltd through various phases of growth and diversification. His strategic vision has been instrumental in securing key partnerships with Indian Railways and TATA Steel.",
    stats: ["30+ Yrs Exp", "Visionary", "Strategy"]
  },
  {
    id: "sudhir",
    name: "Mr. Sudhir Gupta",
    role: "Director, Manufacturing & Trading",
    image: "/images/sudhir.png",
    quote: "Technical excellence and supply chain efficiency are the pillars on which our manufacturing and trading operations stand.",
    bio: "Focuses on the technical excellence and supply chain efficiency of our manufacturing units and trading operations.",
    stats: ["Manufacturing Excellence", "Trading Operations", "Supply Chain"]
  },
  {
    id: "kanishk",
    name: "Mr. Kanishk Sagar Gupta",
    role: "Director, Logistics",
    image: "/images/kanishk.png",
    quote: "Precision in logistics and warehousing is what transforms a supply chain into a competitive advantage.",
    bio: "Mechanical Engineer from University of Nottingham. Specializes in mechanical excellence in logistics and warehousing operations.",
    stats: ["Logistics Automation", "Warehousing", "Fleet Mgmt"]
  },
  {
    id: "atirav",
    name: "Mr. Atirav Sagar Gupta",
    role: "Director, Operations & HR",
    image: "/images/atirav.png",
    quote: "Operational efficiency paired with a strong people-first culture is the foundation of sustainable growth.",
    bio: "Educated at IHL Lausanne, Switzerland. Focuses on operational efficiency and modern HR practices.",
    stats: ["Operations", "HR Culture", "International"]
  },
];

export default function AboutLeadership() {
  const [activeLeader, setActiveLeader] = useState(executives[0]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const leaderId = params.get("leader");
      if (leaderId) {
        const found = executives.find((exec) => exec.id === leaderId);
        if (found) {
          setActiveLeader(found);
        }
      }
    }
  }, []);

  // Filter out the active leader to show the remaining 3 as thumbnails
  const remainingLeaders = executives.filter(exec => exec.id !== activeLeader.id);

  return (
    <section id="leadership" className="bg-[#f8fafc] py-24 w-full">
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
            Visionary leaders driving Lauls Ltd&apos;s mission to strengthen India&apos;s infrastructure.
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
                <Image
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white font-display font-bold text-2xl">{activeLeader.name}</h3>
                  <p className="text-[#DCA54C] text-sm uppercase tracking-widest font-bold mt-1">{activeLeader.role}</p>
                </div>
              </div>
              <div className="lg:w-3/5 bg-[#0A1628] p-10 lg:p-16 flex flex-col justify-center">
                <h4 className="text-2xl md:text-3xl font-display font-bold text-white mb-6 leading-relaxed">
                  &quot;{activeLeader.quote}&quot;
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
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0A1628]/90 to-transparent p-6">
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
