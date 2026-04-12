"use client";

import { ArrowUpRight } from "lucide-react";
import AutoImageRotator from "../AutoImageRotator";

const pillars = [
  { num: "01", title: "Unyielding Quality", desc: "Every component undergoes rigorous ISO and testing standards.", images: ["https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800", "https://images.unsplash.com/photo-1536647960714-469b8c0da9aa?q=80&w=800"], span: "lg:col-span-8 lg:row-span-1" },
  { num: "02", title: "National Scale", desc: "Capabilities spanning across 12 strategic Indian distribution hubs.", images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800", "https://images.unsplash.com/photo-1565439390234-5858cf85aeb9?q=80&w=800"], span: "lg:col-span-4 lg:row-span-2" },
  { num: "03", title: "EV Transport", desc: "Pioneering electric transport in heavy industrial logistics.", images: ["https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800", "https://images.unsplash.com/photo-1595822526362-e1cbce516e81?q=80&w=800"], span: "lg:col-span-4 lg:row-span-1" },
  { num: "04", title: "Client Partnership", desc: "We build tailored supply chains for enterprise needs.", images: ["https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800", "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800"], span: "lg:col-span-4 lg:row-span-1" },
];

export default function AboutPillars() {
  return (
    <section className="bg-[#0A1628] py-32 w-full relative overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center w-full max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C] animate-pulse" />
            <span className="text-[#DCA54C] font-display font-medium uppercase tracking-widest text-[10px]">Core Directives</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight drop-shadow-md">
            The Pillars We <br className="hidden md:block" />
            <span className="text-[#DCA54C]">Stand On</span>
          </h2>
          <p className="text-white/70 text-lg max-w-lg mx-auto font-light leading-relaxed">
            Every decision, every product, every partnership is guided strictly by these four architectural principles.
          </p>
        </div>

        {/* Premium Image Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-2 gap-4 lg:gap-6 min-h-[600px] lg:h-[650px]">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`${pillar.span} group relative bg-black rounded-3xl overflow-hidden cursor-pointer min-h-[350px] lg:min-h-0 border border-white/10`}
            >
              {/* Background Photographic Layer */}
              <AutoImageRotator 
                images={pillar.images} 
                className="absolute inset-0 z-0 opacity-70 group-hover:opacity-90 transition-opacity duration-500" 
                imgClassName="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                interval={4000 + (idx * 500)}
              />
              
              {/* Complex Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0A1628]/40 to-transparent transition-opacity duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

              {/* Number Badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex flex-col items-center justify-center backdrop-blur-md bg-black/20 text-white font-bold tracking-widest text-sm group-hover:bg-[#DCA54C] group-hover:border-[#DCA54C] group-hover:text-[#0A1628] transition-all duration-500 shadow-xl z-20">
                {pillar.num}
              </div>

              {/* Dynamic Content Block */}
              <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-3 tracking-tight group-hover:text-[#DCA54C] transition-colors duration-300 shadow-black/10">
                  {pillar.title}
                </h3>
                
                <div className="overflow-hidden">
                  <p className="text-white/80 text-sm leading-relaxed max-w-sm drop-shadow-sm transform opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
