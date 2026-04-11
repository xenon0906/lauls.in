"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EVHero from "@/components/electric-truck/EVHero";
import EVFleetDetails from "@/components/electric-truck/EVFleetDetails";
import AboutContact from "@/components/about/AboutContact";

export default function ElectricTruckPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Hero Section */}
      <EVHero />

      {/* 2. EV Details Layout */}
      <EVFleetDetails />

      {/* 3. Inquiry / Contact Form */}
      <AboutContact />

      <Footer />
    </main>
  );
}
