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
    <main className="min-h-screen">
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
    </main>
  );
}

// Internal motion import for the about section
import { motion } from "framer-motion";
