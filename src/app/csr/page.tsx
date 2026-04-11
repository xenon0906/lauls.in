"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSRHero from "@/components/csr/CSRHero";
import CSRPillars from "@/components/csr/CSRPillars";
import AboutContact from "@/components/about/AboutContact";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <CSRHero />

      {/* 2. Initiatives Layout */}
      <CSRPillars />

      {/* 3. Inquiry / Contact Form */}
      <AboutContact />

      <Footer />
    </main>
  );
}
