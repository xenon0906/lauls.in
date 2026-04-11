"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const initiatives = [
  {
    title: "Education & Skilling",
    subtitle: "Empowering the next generation",
    desc: "We fund and operate multiple rural schools and vocational training centers near our manufacturing hubs. By providing scholarships and modern technical skilling, we ensure local youths are prepared for high-tech industrial careers.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
    chips: [
      { label: "Impact", value: "5,000+ Students Annually" },
      { label: "Focus", value: "STEM & Vocational" },
    ],
    link: "Read Education Report"
  },
  {
    title: "Environmental Sustainability",
    subtitle: "Aggressive decarbonization",
    desc: "Beyond strictly adhering to EPA regulations, Lauls Ltd is actively investing in captive solar power plants and large-scale afforestation drives to offset the carbon footprint of our steel operations.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200",
    chips: [
      { label: "Renewables", value: "25MW Captive Solar" },
      { label: "Ecology", value: "2M Trees Planted" },
    ],
    link: "View Sustainability Report"
  },
  {
    title: "Community Healthcare",
    subtitle: "Accessible medical infrastructure",
    desc: "We've established 4 primary healthcare centers and run regular mobile medical camps in remote mining regions, offering free diagnostics, maternal care, and essential medicines to underserved families.",
    image: "https://images.unsplash.com/photo-1584515933617-56e6d11e8609?q=80&w=1200",
    chips: [
      { label: "Facilities", value: "4 Primary Care Centers" },
      { label: "Outreach", value: "Monthly Health Camps" },
    ],
    link: "Read Healthcare Impact"
  }
];

export default function CSRPillars() {
  return (
    <section className="bg-[#fcf8f6] py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-24">
          <div className="text-[#DCA54C] font-bold text-[10px] tracking-widest uppercase mb-4">
            Our Initiatives
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A1628] mb-6 tracking-tight">
            Pillars of Impact
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Our CSR framework is structured around three core pillars, designed to create measurable, long-term socio-economic upliftment.
          </p>
        </div>

        {/* Alternating Row Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {initiatives.map((initiative, idx) => (
            <div 
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#0A1628]">
                  <img 
                    src={initiative.image}
                    alt={initiative.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-[#0A1628]/10" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
                </div>
              </motion.div>

              {/* Text / Details Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white border border-gray-100 rounded-full w-fit shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C]" />
                  <span className="text-[#0A1628] font-display font-medium uppercase tracking-widest text-[10px]">Pillar {idx + 1}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  {initiative.title}
                </h3>
                
                <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-6">
                  {initiative.subtitle}
                </h4>

                <p className="text-gray-500 font-light leading-relaxed mb-10 w-full lg:max-w-lg">
                  {initiative.desc}
                </p>

                {/* Highly visible specs block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {initiative.chips.map((chip, i) => (
                    <div key={i} className="flex flex-col bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                       <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">{chip.label}</span>
                       <span className="text-[#0A1628] font-bold text-sm">{chip.value}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <button className="flex items-center gap-2 text-[#DCA54C] font-bold border-b-2 border-transparent hover:border-[#DCA54C] pb-1 transition-all w-max group">
                  {initiative.link} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
