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
    >
      <Navbar />
      <Hero />
      <ServicesBar />
      <PartnerTicker />
      <Heritage />
      <Pillars />
      <Leadership />
      <CTA />
      <FAQ />
      <Footer />
    </motion.main>
  );
}
