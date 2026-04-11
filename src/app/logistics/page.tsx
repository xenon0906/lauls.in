"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogisticsHero from "@/components/logistics/LogisticsHero";
import LogisticsServices from "@/components/logistics/LogisticsServices";
import AboutContact from "@/components/about/AboutContact";

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <LogisticsHero />

      {/* 2. Operations / Services Layout */}
      <LogisticsServices />

      {/* 3. Inquiry / Contact Form */}
      <AboutContact />

      <Footer />
    </main>
  );
}
