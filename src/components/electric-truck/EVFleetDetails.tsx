"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const evDetails = [
  {
    title: "Heavy Haulage Capabilities",
    subtitle: "Built for industrial payloads",
    desc: "Our EV fleet isn't restricted to light delivery. We deploy heavy-duty multi-axle electric rigs designed specifically for transporting steel coils, ferro alloys, and massive infrastructural components with identical reliability to diesel counterparts.",
    image: "https://images.unsplash.com/photo-1519003722216-16eed37d4576?q=80&w=1200&auto=format&fit=crop",
    chips: [
      { label: "Capacity", value: "Up to 40T Gross" },
      { label: "Torque", value: "Instant Hub Torque" },
    ],
    link: "View Specifications"
  },
  {
    title: "Decarbonized Supply Chains",
    subtitle: "Scope 3 Emission Reduction",
    desc: "By integrating our electric fleet into your logistics network, Lauls Ltd directly and drastically reduces your corporate Scope 3 emissions. Track your exact carbon offset through our rigorous, transparent ESG reporting.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
    chips: [
      { label: "Impact", value: "Zero Scope 1 Emissions" },
      { label: "Reporting", value: "Real-time ESG Dashboards" },
    ],
    link: "Read ESG Report"
  },
  {
    title: "Smart Charging Network",
    subtitle: "Eliminating range anxiety",
    desc: "We own and operate an expansive proprietary network of high-speed DC fast chargers across key industrial corridors. Our rigorous telemetry systems predict optimal charging stops, ensuring your supply chain never halts.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938cb?q=80&w=1200&auto=format&fit=crop",
    chips: [
      { label: "Infrastructure", value: "120kW+ DC Fast Chargers" },
      { label: "Telemetry", value: "AI-Routed Checkpoints" },
    ],
    link: "View Charging Map"
  }
];

export default function EVFleetDetails() {
  return (
    <section className="bg-white py-32 w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-24">
          <div className="text-emerald-500 font-bold text-[10px] tracking-widest uppercase mb-4">
            Next-Gen Fleet
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-[#0A1628] mb-6 tracking-tight">
            The future of freight
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Merging intense heavy-payload physics with zero-emission electric powertrains.
          </p>
        </div>

        {/* Alternating Row Layout */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {evDetails.map((detail, idx) => (
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
                <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl bg-[#0A1628]">
                  <Image
                    src={detail.image}
                    alt={detail.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
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
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full w-fit">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-900 font-display font-medium uppercase tracking-widest text-[10px]">EV Pillar {idx + 1}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-display font-bold text-[#0A1628] mb-4">
                  {detail.title}
                </h3>

                <h4 className="text-lg md:text-xl text-gray-800 font-medium mb-6">
                  {detail.subtitle}
                </h4>

                <p className="text-gray-500 font-light leading-relaxed mb-10 w-full lg:max-w-lg">
                  {detail.desc}
                </p>

                {/* Specs block */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {detail.chips.map((chip, i) => (
                    <div key={i} className="flex flex-col bg-gray-50 rounded-xl p-5 border border-gray-100">
                       <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">{chip.label}</span>
                       <span className="text-[#0A1628] font-bold text-sm">{chip.value}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <button className="flex items-center gap-2 text-emerald-600 font-bold border-b-2 border-transparent hover:border-emerald-500 pb-1 transition-all w-max group">
                  {detail.link} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
