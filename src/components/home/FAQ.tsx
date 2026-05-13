"use client";

import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { Mail, PhoneCall, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What logistics services does Lauls Ltd. provide?",
    answer: "We provide end-to-end logistics solutions, ensuring reliable supply chains and operational efficiency for massive industrial cargo, managing over 500,000 MT of transport annually.",
    tags: ["Supply Chain", "Heavy Cargo", "Pan India"]
  },
  {
    question: "Do you supply heavy alloy steel rounds?",
    answer: "Yes, we operate extensive, strategically located stockyards dedicated to distributing heavy alloy steel, precision tubes, and rounds to meet diverse industrial manufacturing requirements.",
    tags: ["Stockyards", "Alloy Steel", "Distribution"]
  },
  {
    question: "Which ferro alloys do you trade and supply?",
    answer: "As the sole authorized distributor of TATA Steel Ferro Alloys & Minerals in Northern India, we supply high-quality ferro chrome, ferro manganese, silico manganese, and other essential minerals.",
    tags: ["TATA Steel", "Authorized", "Minerals"]
  },
  {
    question: "What is your approach to sustainable transport?",
    answer: "We are pioneering sustainable transport with our expanding fleet of electric trucks, significantly reducing carbon footprints and promoting eco-friendly practices in heavy industry operations.",
    tags: ["Eco-Fleet", "Zero Emission", "Sustainability"]
  },
  {
    question: "What are your capabilities in precision tubes?",
    answer: "We offer dedicated handling and storage for specialized precision pipes, employing flawless concentric engineering for critical high-pressure systems while maintaining zero-defect methodology.",
    tags: ["Zero Defect", "Tube Division", "High-Pressure"]
  },
  {
    question: "What types of wire rods do you offer?",
    answer: "We supply high-grade mild, alloy, and stainless steel wire rods that are optimized for precise drawing, complex fabrication, and aerospace or power sector applications.",
    tags: ["Mild Steel", "Stainless", "Fabrication"]
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" className="bg-white pt-10 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Side: Info Box */}
        <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-accent" />
            <span className="text-accent font-display font-bold uppercase tracking-widest text-[10px]">FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-[2.5rem] font-display font-bold text-primary mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-primary/60 mb-10 leading-relaxed text-sm">
            Find answers to common questions about our comprehensive industrial divisions, from logistics and sustainable fleets to specialized steel and alloy distribution.
          </p>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-10 h-10 bg-[#F4F7FB] rounded-lg flex items-center justify-center text-accent mb-6">
              <Mail size={20} />
            </div>
            <h4 className="font-display font-bold text-primary mb-2 text-lg">Can&apos;t find your answer?</h4>
            <p className="text-primary/50 text-xs mb-8 leading-relaxed">Our team is ready to help with any specific questions about our industrial supply chains, logistics, or trading services.</p>
            
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-accent text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-accent/90 transition-all text-xs shadow-lg shadow-accent/20">
                <Mail size={14} />
                Email Us
              </button>
              <button className="flex-1 py-3 border border-gray-200 text-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-xs">
                <PhoneCall size={14} />
                Call Us
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="lg:col-span-8 space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeIndex === idx ? "border-accent shadow-[0_4px_20px_rgba(37,99,235,0.08)]" : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                   <div className={`transition-colors ${activeIndex === idx ? "text-accent" : "text-gray-300 group-hover:text-gray-400"}`}>
                      <CheckCircle2 size={18} />
                   </div>
                   <span className={`font-display font-semibold text-sm md:text-base ${activeIndex === idx ? "text-primary" : "text-primary/70"}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1 rounded-md transition-colors ${activeIndex === idx ? "bg-accent/10" : "bg-gray-50"}`}>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${activeIndex === idx ? "rotate-180 text-accent" : "text-gray-400"}`} />
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 pl-[3.25rem]">
                       <p className="text-primary/60 text-sm leading-relaxed mb-6 max-w-2xl">
                        {faq.answer}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {faq.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-accent rounded text-[10px] uppercase font-bold tracking-widest border border-blue-100/50">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
