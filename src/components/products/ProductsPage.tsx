"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, FlaskConical, Layers, Circle, Cylinder } from "lucide-react";

// ─── Product Taxonomy from handwritten notes ─────────────────────────────────
const productCategories = [
  {
    id: "ferro-alloys",
    icon: FlaskConical,
    category: "Ferro Alloys",
    tagline: "Precision-Grade Inputs for High-Performance Steel",
    description:
      "Lauls is a primary distributor of ferro alloys sourced directly from top-tier smelters. Our ferro alloys are used in producing high-grade, specialty steels and are supplied to Indian and global steel mills with rigorous quality assurance.",
    accent: "#DCA54C",
    bgGradient: "from-amber-50 to-white",
    image: "/images/manufacturing.jpg",
    products: [
      {
        name: "Ferro Manganese",
        grade: "HC / MC / LC",
        use: "Deoxidiser & desulphuriser in steel production",
        specs: "Mn: 60–75% | C: 0.1–7%",
      },
      {
        name: "Ferro Chrome",
        grade: "HC / MC / LC",
        use: "Essential for stainless and alloy steel production",
        specs: "Cr: 50–70% | C: 0.03–8%",
      },
      {
        name: "Ferro Silicon",
        grade: "FeSi 45 / 65 / 75",
        use: "Strengthening and deoxidising steel & cast iron",
        specs: "Si: 45–75% | Al: <2%",
      },
      {
        name: "Silico Manganese",
        grade: "Standard / High-Grade",
        use: "Combined deoxidiser and alloying element",
        specs: "Mn: 60–68% | Si: 14–20%",
      },
    ],
  },
  {
    id: "wire-rods",
    icon: Layers,
    category: "Wire Rods",
    tagline: "Rolled to Precision for Every Industrial Application",
    description:
      "Our wire rod inventory spans an extensive range of grades suited for fasteners, springs, tyre cords, welding wires, and cold heading applications. All stock is sourced from Sail, Tata, and JSW mills.",
    accent: "#3b82f6",
    bgGradient: "from-blue-50 to-white",
    image: "/images/manufacturing.jpg",
    products: [
      {
        name: "Alloy Steel Wire Rods",
        grade: "SAE / IS Standards",
        use: "Automotive springs, fasteners & high-strength bolts",
        specs: "Dia: 5.5mm – 25mm | Coil Wt: 1–2 MT",
      },
      {
        name: "Mild Steel Wire Rods",
        grade: "IS 2062 / SAE 1006–1018",
        use: "Nails, fencing, binding wire, barbed wire",
        specs: "Dia: 5.5mm – 14mm | C: <0.15%",
      },
      {
        name: "Stainless Steel Wire Rods",
        grade: "SS 304 / 316 / 410 / 430",
        use: "Pharmaceutical, food-grade and marine applications",
        specs: "Dia: 5.5mm – 16mm | Finish: Bright Annealed",
      },
    ],
  },
  {
    id: "steel-rounds",
    icon: Circle,
    category: "Steel Rounds",
    tagline: "High-Strength Rounds for Heavy Engineering",
    description:
      "Lauls supplies forged and rolled steel rounds across a wide diameter spectrum. Our rounds are the choice of engineering firms, auto-component manufacturers and defence contractors for critical load-bearing applications.",
    accent: "#10b981",
    bgGradient: "from-emerald-50 to-white",
    image: "/images/stockyard.jpg",
    products: [
      {
        name: "Alloy Steel Rounds",
        grade: "EN8 / EN19 / EN24 / EN31 / EN36",
        use: "Gears, axles, shafts, tooling & dies",
        specs: "Dia: 20mm – 500mm | Length: 3–7m",
      },
      {
        name: "Mild Steel Rounds",
        grade: "IS 2062 E250 / E350",
        use: "General engineering, construction & fabrication",
        specs: "Dia: 6mm – 250mm | Length: 3–12m",
      },
    ],
  },
  {
    id: "precision-tubes",
    icon: Cylinder,
    category: "Precision Tubes",
    tagline: "ERW Tubes Built for India's Toughest Conditions",
    description:
      "Our ERW (Electric Resistance Welded) steel tubes are manufactured under rigorous conditions and supplied to auto, construction, and infrastructure sectors. All tubes comply with IS / ASTM / DIN standards.",
    accent: "#8b5cf6",
    bgGradient: "from-purple-50 to-white",
    image: "/images/below-manufacturing.jpg",
    products: [
      {
        name: "ERW Steel Tubes",
        grade: "IS 1239 / IS 3601 / ASTM A513",
        use: "Structural, mechanical & automotive tube applications",
        specs: "OD: 15mm – 168mm | WT: 1.6mm – 8mm",
      },
      {
        name: "Square & Rectangular Hollow Sections",
        grade: "IS 4923",
        use: "Fabrication, furniture & construction frames",
        specs: "Size: 20×20 – 150×150mm | WT: 1.6–6mm",
      },
    ],
  },
];

function ProductCard({ p }: { p: { name: string; grade: string; use: string; specs: string }; accent: string }) {
  return (
    <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:border-gray-200 transition-all">
      <div className="font-display font-bold text-[#0A1628] text-base mb-1">{p.name}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{p.grade}</div>
      <p className="text-gray-500 text-xs leading-relaxed mb-3">{p.use}</p>
      <div className="text-[10px] font-mono text-gray-400 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">{p.specs}</div>
    </div>
  );
}

function CategorySection({ cat, idx }: { cat: typeof productCategories[0]; idx: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = idx % 2 === 0;
  const Icon = cat.icon;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      id={cat.id}
      className={`py-20 w-full border-t border-gray-100 bg-linear-to-br ${cat.bgGradient}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

          {/* Image */}
          <div className="w-full lg:w-2/5 shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl group">
              <Image
                src={cat.image}
                alt={cat.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0A1628]/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3"
                  style={{ backgroundColor: cat.accent }}
                >
                  <Icon size={12} className="text-white" />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">{cat.category}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5">
            <div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border"
              style={{ borderColor: cat.accent + "40", backgroundColor: cat.accent + "10" }}
            >
              <Icon size={12} style={{ color: cat.accent }} />
              <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: cat.accent }}>
                {cat.category}
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-display font-bold text-[#0A1628] mb-2 leading-tight">
              {cat.category}
            </h2>
            <p className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: cat.accent }}>
              {cat.tagline}
            </p>
            <p className="text-gray-600 font-light leading-relaxed text-base mb-10">
              {cat.description}
            </p>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.products.map((p, i) => (
                <ProductCard key={i} p={p} accent={cat.accent} />
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={`/products/${cat.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: cat.accent }}
              >
                View All {cat.category} <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border-2 transition-all hover:scale-105"
                style={{ borderColor: cat.accent, color: cat.accent }}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/images/manufacturing.jpg")' }}
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628]/97 via-[#0A1628]/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#DCA54C]/20 border border-[#DCA54C]/30 rounded-full"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#DCA54C] animate-pulse" />
            <span className="text-[#DCA54C] text-[10px] font-black uppercase tracking-widest">Product Catalog</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-tight mb-6 tracking-tight"
          >
            Our Industrial<br />
            <span className="text-[#DCA54C]">Product Range</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-10"
          >
            From ferro alloys to precision tubes — Lauls Ltd supplies the full spectrum of industrial steel
            products directly from primary mills across India.
          </motion.p>

          {/* Category Quick-Jump */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {productCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs font-bold hover:bg-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
                >
                  <Icon size={12} />
                  {cat.category}
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((cat, idx) => (
        <CategorySection key={cat.id} cat={cat} idx={idx} />
      ))}

      {/* Bottom CTA */}
      <section className="bg-[#0A1628] py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-[#DCA54C] font-black text-[10px] uppercase tracking-widest mb-4">Ready to Order?</div>
          <h2 className="text-4xl font-display font-bold text-white mb-4">Get a Custom Quote Today</h2>
          <p className="text-white/60 font-light mb-8">
            Our team of industry specialists will provide you with competitive, mill-direct pricing and full technical documentation within 24 hours.
          </p>
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DCA54C] text-[#0A1628] font-bold rounded-lg text-sm hover:bg-[#c5923b] transition-all shadow-xl shadow-[#DCA54C]/30"
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
