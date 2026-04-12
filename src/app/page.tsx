"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import ServicesBar from "@/components/home/ServicesBar";
import PartnerTicker from "@/components/home/PartnerTicker";
import Heritage from "@/components/home/Heritage";
import Pillars from "@/components/home/Pillars";
import Leadership from "@/components/home/Leadership";

import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen"
    >
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Interactive Services Bar */}
      <ServicesBar />

      {/* 3. Partner Logo Ticker */}
      <PartnerTicker />

      {/* 4. Heritage & Services Grid Section */}
      <Heritage />

      {/* 6. Pillars Section (Business Verticals) */}
      <Pillars />

      {/* 7. Leadership Team */}
      <Leadership />

      {/* 8. CTA Banner */}
      <CTA />

      {/* 9. FAQ Section */}
      <FAQ />



      {/* 12. Footer */}
      <Footer />
    </motion.main>
  );
}

// Internal motion import for the home section
import { motion } from "framer-motion";
