"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogisticsHero from "./LogisticsHero";
import LogisticsServices from "./LogisticsServices";
import LogisticsPrecisionTubes from "./LogisticsPrecisionTubes";
import AboutContact from "@/components/about/AboutContact";

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white" aria-label="Logistics and Warehousing Services">
      <Navbar />
      <article>
        <LogisticsHero />
        <LogisticsServices />
        <LogisticsPrecisionTubes />
      </article>
      <aside>
        <AboutContact />
      </aside>
      <Footer />
    </main>
  );
}
