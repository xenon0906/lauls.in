"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutNarrative from "@/components/about/AboutNarrative";
import AboutPillars from "@/components/about/AboutPillars";
import FoundersLineage from "@/components/about/FoundersLineage";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutTimeline from "@/components/about/AboutTimeline";
import AboutStatsBar from "@/components/about/AboutStatsBar";
import AboutContact from "@/components/about/AboutContact";

export default function AboutPage() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen"
    >
      <Navbar />
      
      {/* 1. Hero Section */}
      <AboutHero />

      {/* 2. Narrative/Story Section */}
      <AboutNarrative />

      {/* 3. Pillars */}
      <AboutPillars />

      {/* 4. Founders Lineage — Family Heritage */}
      <FoundersLineage />

      {/* 5. Leadership Section */}
      <AboutLeadership />

      {/* 6. Timeline / Milestones */}
      <AboutTimeline />

      {/* 7. Stats Bar */}
      <AboutStatsBar />

      {/* 8. Contact Area */}
      <AboutContact />

      <Footer />
    </motion.main>
  );
}

// Internal motion import for the about section
import { motion } from "framer-motion";
