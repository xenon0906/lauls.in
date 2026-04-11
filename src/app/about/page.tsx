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
    <main className="min-h-screen">
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
    </main>
  );
}
