"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Circle } from "lucide-react";

const products = [
  {
    name: "Alloy Steel Rounds",
    grade: "EN8 / EN19 / EN24 / EN31 / EN36",
    images: ["/images/products/alloy_steel_rounds_1778571606218.png", "/images/products/mild_steel_rounds_1778571621519.png"],
    use: "Gears, axles, shafts, tooling & dies",
    specs: "Dia: 20mm – 500mm | Length: 3–7m",
    desc: "Alloy Steel Rounds are the material of choice for heavy-duty engineering applications requiring high strength, toughness, and wear resistance. Lauls stocks a full range of EN-grade alloy rounds for immediate supply to auto-component and defence manufacturers.",
  },
  {
    name: "Mild Steel Rounds",
    grade: "IS 2062 E250 / E350",
    images: ["/images/products/mild_steel_rounds_1778571621519.png", "/images/products/alloy_steel_rounds_1778571606218.png"],
    use: "General engineering, construction & fabrication",
    specs: "Dia: 6mm – 250mm | Length: 3–12m",
    desc: "Mild Steel Rounds are the most versatile construction and fabrication material in any industrial setting. Our IS 2062 rounds come in E250 and E350 grades, ideal for structural steel work, machine bases, and general engineering components.",
  },
];

export default function SteelRoundsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <Image
          src="/images/products/alloy_steel_rounds_1778571606218.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/97 via-[#0A1628]/80 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20">
          <Link href="/products" className="inline-flex items-center gap-2 text-[#DCA54C] text-xs font-bold uppercase tracking-widest mb-6 hover:text-white transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full">
            <Circle size={12} className="text-emerald-400" />
            <span className="text-emerald-300 text-[10px] font-black uppercase tracking-widest">Steel Distribution</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight mb-4">
            Steel <span className="text-emerald-400">Rounds</span>
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl">High-strength forged and rolled steel rounds in a wide diameter range. Trusted by auto-component manufacturers, defence contractors, and heavy engineering firms.</p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-linear-to-br from-emerald-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-16">
          {products.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col lg:flex-row items-center gap-10 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden aspect-4/3 shadow-xl relative flex">
                <div className="w-1/2 relative">
                  <Image src={p.images[0]} alt={p.name} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-1/2 relative">
                  <Image src={p.images[1]} alt={`${p.name} detail`} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="w-full lg:w-3/5">
                <div className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mb-2">{p.grade}</div>
                <h2 className="text-3xl font-display font-black text-[#0A1628] mb-3">{p.name}</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">{p.desc}</p>
                <div className="font-mono text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-6">{p.specs}</div>
                <div className="text-sm text-gray-500 mb-8 italic">Used for: {p.use}</div>
                <Link href="/contact#contact-form" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-all text-sm shadow-lg">
                  Request Quote <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
