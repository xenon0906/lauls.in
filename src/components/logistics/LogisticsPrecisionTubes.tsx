"use client";

import { motion } from "framer-motion";
import { MoveRight, PackageSearch, ShieldCheck, Factory } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Specialized Storage",
    description: "Dedicated rust-free zone ensuring perfect preservation of precision tubes.",
    icon: PackageSearch,
  },
  {
    title: "Safe Handling",
    description: "Automated cranes and padded slings specifically for damage-free pipe handling.",
    icon: ShieldCheck,
  },
  {
    title: "Direct from Mill",
    description: "Streamlined logistics direct from TATA Steel mills to our warehousing facilities.",
    icon: Factory,
  },
];

export default function LogisticsPrecisionTubes() {
  return (
    <section className="bg-primary overflow-hidden relative border-t border-white/5 py-24">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/10 via-primary to-primary"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[2px] w-8 bg-highlight" />
              <span className="text-highlight font-display uppercase tracking-widest text-xs font-bold">
                Specialized Division
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6 leading-tight">
              Precision Logistics for <br />
              <span className="text-white/60">Precision Tubes</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed font-light">
              Handling precision tubes requires specialized infrastructure and utmost care. Our dedicated tube divisions ensure that every pipe is stored, handled, and delivered with zero compromises on quality, avoiding scratching or bending.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mb-10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 shrink-0">
                    <feature.icon size={20} className="text-highlight" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                    <p className="text-sm text-white/50">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/products/precision-tubes">
              <button className="px-8 py-4 bg-transparent border border-highlight text-highlight hover:bg-highlight hover:text-primary font-medium rounded-lg flex items-center gap-3 transition-colors duration-300">
                Explore Precision Tubes <MoveRight size={18} />
              </button>
            </Link>
          </motion.div>

          {/* Abstract Image or Technical Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
          >
            <Image
              src="/images/IMG_9988.JPG"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/20 to-transparent" />
            
            {/* Info overlay */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Handling Capacity</p>
                  <p className="text-2xl font-display font-medium text-white">50K+ <span className="text-sm text-highlight">MT/Year</span></p>
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Defect Rate</p>
                  <p className="text-2xl font-display font-medium text-white">0.00% <span className="text-sm text-highlight">Avg</span></p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
