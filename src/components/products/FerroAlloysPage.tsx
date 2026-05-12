"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, FlaskConical } from "lucide-react";

const products = [
  {
    name: "Ferro Manganese",
    grade: "HC / MC / LC",
    images: ["/images/products/ferro_manganese_1778571486667.png", "/images/products/ferro_chrome_1778571501692.png"],
    use: "Deoxidiser & desulphuriser in steel production",
    specs: "Mn: 60–75% | C: 0.1–7%",
    desc: "Ferro Manganese is essential in steel manufacturing as a deoxidiser and desulphuriser. Lauls sources HC, MC, and LC grades from premium smelters to serve diverse steel mill specifications.",
  },
  {
    name: "Ferro Chrome",
    grade: "HC / MC / LC",
    images: ["/images/products/ferro_chrome_1778571501692.png", "/images/products/ferro_silicon_1778571520226.png"],
    use: "Essential for stainless and alloy steel production",
    specs: "Cr: 50–70% | C: 0.03–8%",
    desc: "Ferro Chrome is the primary source of chromium in stainless and alloy steels, providing corrosion resistance, hardness, and high-temperature strength. We supply multiple grades to suit your specific alloying requirements.",
  },
  {
    name: "Ferro Silicon",
    grade: "FeSi 45 / 65 / 75",
    images: ["/images/products/ferro_silicon_1778571520226.png", "/images/products/ferro_manganese_1778571486667.png"],
    use: "Strengthening and deoxidising steel & cast iron",
    specs: "Si: 45–75% | Al: <2%",
    desc: "Ferro Silicon is used as both a deoxidising and alloying agent. It improves the strength, elasticity, and corrosion resistance of steel and cast iron, available in FeSi 45, 65, and 75 grades.",
  },
  {
    name: "Silico Manganese",
    grade: "Standard / High-Grade",
    images: ["/images/products/silico_manganese_1778571539533.png", "/images/products/ferro_silicon_1778571520226.png"],
    use: "Combined deoxidiser and alloying element",
    specs: "Mn: 60–68% | Si: 14–20%",
    desc: "Silico Manganese is a combined deoxidiser and alloying agent used widely in structural steel production. It simultaneously provides deoxidising and manganese-alloying benefits, reducing costs versus separate additions.",
  },
];

export default function FerroAlloysPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <Image
          src="/images/products/ferro_chrome_1778571501692.png"
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
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-[#DCA54C]/20 border border-[#DCA54C]/30 rounded-full">
            <FlaskConical size={12} className="text-[#DCA54C]" />
            <span className="text-[#DCA54C] text-[10px] font-black uppercase tracking-widest">Steel Distribution</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white leading-tight mb-4">
            Ferro <span className="text-[#DCA54C]">Alloys</span>
          </h1>
          <p className="text-white/70 text-lg font-light max-w-2xl">Precision-grade ferro alloys sourced directly from India&apos;s top smelters. Supplied to steel mills across Northern India with complete mill test certificates.</p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-linear-to-br from-amber-50 to-white py-20">
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
                <div className="text-[#DCA54C] text-[10px] font-black uppercase tracking-widest mb-2">{p.grade}</div>
                <h2 className="text-3xl font-display font-black text-[#0A1628] mb-3">{p.name}</h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">{p.desc}</p>
                <div className="font-mono text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded-lg px-4 py-3 mb-6">{p.specs}</div>
                <div className="text-sm text-gray-500 mb-8 italic">Used for: {p.use}</div>
                <Link href="/contact#contact-form" className="inline-flex items-center gap-2 px-6 py-3 bg-[#DCA54C] text-[#0A1628] font-bold rounded-lg hover:bg-[#c5923b] transition-all text-sm shadow-lg">
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
