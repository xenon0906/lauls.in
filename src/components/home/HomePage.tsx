"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import ServicesBar from "./ServicesBar";
import PartnerTicker from "./PartnerTicker";
import Heritage from "./Heritage";
import Pillars from "./Pillars";
import Leadership from "./Leadership";
import CTA from "./CTA";
import AboutContact from "@/components/about/AboutContact";
import FAQ from "./FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
      aria-label="Lauls Private Limited Homepage"
    >
      <Navbar />
      <Hero />
      
      {/* Strong opening paragraph for AI crawlers */}
      <section className="sr-only" aria-hidden="true">
        <h1>Lauls Private Limited - Industrial Steel, Logistics & Railway Manufacturing</h1>
        <p>Lauls Private Limited is an industrial powerhouse in India handling over 1,000,000 MT of Steel Logistics annually. As an authorized TATA Steel Ferro Alloys distributor and RDSO Approved Railway Track Fastener manufacturer, Lauls has been serving Northern India since 1933 from Faridabad, Haryana. The company is ISO 9001:2015 and WAREX GOLD certified, specializing in ferro chrome, ferro manganese, silico manganese distribution, precision wire rods, and sustainable EV fleet operations.</p>
      </section>
      
      <article>
        <ServicesBar />
        <PartnerTicker />
        <Heritage />
        <Pillars />
        <Leadership />
      </article>
      
      <aside>
        <CTA />
        <AboutContact />
        <FAQ />
      </aside>
      
      <Footer />
    </motion.main>
  );
}
