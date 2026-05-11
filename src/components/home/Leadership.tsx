"use client";

import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    id: "visionaries",
    name: "Mr. SR Laul & Late Shri CS Gupta",
    role: "Founding Visionaries",
    image: "/images/team-group.jpg",
    bio: "The visionary founders who laid the foundation of Lauls Ltd. in 1933. Mr. SR Laul and Late Shri CS Gupta brought together decades of industrial expertise to create a company that would become a cornerstone of India's railway manufacturing and logistics landscape.",
    achievements: [
      "Established Lauls Ltd. in 1933",
      "Pioneered RDSO-certified manufacturing",
      "Built pan-India logistics network"
    ],
    fullStory: "Read Full Story"
  },
  {
    id: "abhay",
    name: "Mr. Abhay Sagar Gupta",
    role: "Director In-Charge",
    image: "/images/abhay-gupta-new.jpg",
    bio: "With over 30 years of leadership, Mr. Abhay Sagar Gupta has steer Lauls Ltd through various phases of growth and diversification. His strategic vision has been instrumental in securing key partnerships with Indian Railways and TATA Steel.",
    achievements: [
      "30+ Years active leadership",
      "Expanded into Ferro Alloys Trading",
      "ISO & OHSAS Certifications Lead"
    ],
    fullStory: "Read Bio"
  },
  {
    id: "sudhir",
    name: "Mr. Sudhir Gupta",
    role: "Director, Manufacturing & Trading",
    image: "/images/sudhir-gupta.jpg",
    bio: "Focuses on the technical excellence and supply chain efficiency of our manufacturing units and trading operations.",
    achievements: [
      "Manufacturing Excellence",
      "Trading Operations Optimization",
      "Supply Chain Global Reach"
    ],
    fullStory: "Read Bio"
  },
  {
    id: "kanishk",
    name: "Mr. Kanishk Sagar Gupta",
    role: "Director, Logistics",
    image: "/images/kanishk-gupta-new.jpg",
    bio: "Mechanical Engineer from University of Nottingham. Specializes in mechanical excellence in logistics and warehousing operations.",
    achievements: [
      "Logistics Automation",
      "Warehousing Modernization",
      "Fleet Management"
    ],
    fullStory: "Read Bio"
  },
  {
    id: "atirav",
    name: "Mr. Atirav Sagar Gupta",
    role: "Director, Operations & HR",
    image: "/images/atirav-gupta-new.jpg",
    bio: "Educated at IHL Lausanne, Switzerland. Focuses on operational efficiency and modern HR practices.",
    achievements: [
      "Operational Scaling",
      "Corporate HR Culture",
      "International Operations"
    ],
    fullStory: "Read Bio"
  }
];

export default function Leadership() {
  const [activeLeader, setActiveLeader] = useState(leaders[0]);

  return (
    <SectionWrapper id="leadership" className="bg-[#f8fafc]">
      <div className="text-center mb-16">
        <span className="text-accent font-display font-bold uppercase tracking-[0.2em] text-xs">Leadership</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mt-4">Our Visionary Leadership Team</h2>
        <p className="text-primary/50 mt-6 max-w-2xl mx-auto">
          Meet the leaders who have shaped Lauls Ltd. into a trusted name across railway manufacturing, logistics, and global trading.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left List */}
        <div className="lg:col-span-4 space-y-4">
          {leaders.map((leader) => (
            <button
              key={leader.id}
              onClick={() => setActiveLeader(leader)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                activeLeader.id === leader.id 
                  ? "bg-white border-accent shadow-xl shadow-accent/5 ring-4 ring-accent/5" 
                  : "bg-white border-transparent hover:border-accent/30"
              }`}
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-primary/10 shrink-0">
                <Image src={leader.image} alt={leader.name} width={56} height={56} className="object-cover" />
              </div>
              <div>
                <h4 className={`font-display font-bold text-sm md:text-base ${activeLeader.id === leader.id ? "text-primary" : "text-primary/70"}`}>
                  {leader.name}
                </h4>
                <p className="text-xs text-primary/40 mt-1 font-medium">{leader.role}</p>
              </div>
              <ChevronRight className={`ml-auto transition-transform ${activeLeader.id === leader.id ? "text-accent translate-x-1" : "text-primary/20 opacity-0 group-hover:opacity-100"}`} size={20} />
            </button>
          ))}
        </div>

        {/* Right Featured Card */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLeader.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl overflow-hidden border border-accent/10 shadow-2xl flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Photo */}
              <div className="md:w-5/12 relative aspect-[4/5] md:aspect-auto">
                <Image
                  src={activeLeader.image}
                  alt={activeLeader.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/60 to-transparent md:hidden" />
              </div>

              {/* Data */}
              <div className="md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-accent font-display font-bold uppercase tracking-widest text-[10px]">
                    {activeLeader.id === "visionaries" ? "Founding Visionaries" : "Board of Directors"}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary mb-2">
                  {activeLeader.name}
                </h3>
                <p className="text-primary/50 font-medium mb-8">{activeLeader.role}</p>
                
                <p className="text-primary/70 text-base leading-relaxed mb-8 italic">
                  &quot;{activeLeader.bio}&quot;
                </p>

                <div className="space-y-4 mb-10">
                  {activeLeader.achievements.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-accent" />
                      <span className="text-primary/60 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="px-8 py-3.5 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all flex items-center gap-2 self-start ring-4 ring-accent/10">
                  <span className="text-white fill-white"><ChevronRight size={18} /></span>
                  {activeLeader.fullStory}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
