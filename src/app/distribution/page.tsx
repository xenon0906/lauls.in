"use client";

import Navbar from "@/components/Navbar";
import DistributionHero from "@/components/distribution/DistributionHero";
import DistributionProducts from "@/components/distribution/DistributionProducts";
import DistributionSpecs from "@/components/distribution/DistributionSpecs";
import DistributionAdvantages from "@/components/distribution/DistributionAdvantages";
import AboutContact from "@/components/about/AboutContact";
import Footer from "@/components/Footer";

export default function DistributionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <DistributionHero />

      {/* 2. Product Range */}
      <DistributionProducts />

      {/* 3. Technical Specs Table */}
      <DistributionSpecs />

      {/* 4. Values & Advantages */}
      <DistributionAdvantages />

      {/* 5. Request a Quote Form (Swapped to AboutContact) */}
      <AboutContact />

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
