"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSRHero from "./CSRHero";
import CSRPillars from "./CSRPillars";
import AboutContact from "@/components/about/AboutContact";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <CSRHero />
      <CSRPillars />
      <AboutContact />
      <Footer />
    </main>
  );
}
