"use client";

import Navbar from "@/components/Navbar";
import DistributionHero from "./DistributionHero";
import DistributionProducts from "./DistributionProducts";
import DistributionSpecs from "./DistributionSpecs";
import DistributionAdvantages from "./DistributionAdvantages";
import AboutContact from "@/components/about/AboutContact";
import Footer from "@/components/Footer";

export default function DistributionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <DistributionHero />
      <DistributionProducts />
      <DistributionSpecs />
      <DistributionAdvantages />
      <AboutContact />
      <Footer />
    </main>
  );
}
