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
    <main className="min-h-screen bg-white" aria-label="Steel Distribution Services">
      <Navbar />
      <article>
        <DistributionHero />
        <DistributionProducts />
        <DistributionSpecs />
        <DistributionAdvantages />
      </article>
      <aside>
        <AboutContact />
      </aside>
      <Footer />
    </main>
  );
}
