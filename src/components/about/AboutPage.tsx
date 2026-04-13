"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "./AboutHero";
import AboutNarrative from "./AboutNarrative";
import AboutPillars from "./AboutPillars";
import FoundersLineage from "./FoundersLineage";
import AboutLeadership from "./AboutLeadership";
import AboutTimeline from "./AboutTimeline";
import AboutStatsBar from "./AboutStatsBar";
import AboutContact from "./AboutContact";

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
      <AboutHero />
      <AboutNarrative />
      <AboutPillars />
      <FoundersLineage />
      <AboutLeadership />
      <AboutTimeline />
      <AboutStatsBar />
      <AboutContact />
      <Footer />
    </motion.main>
  );
}
