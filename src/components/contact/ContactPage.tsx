"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "./ContactHero";
import AboutContact from "@/components/about/AboutContact";
import ContactDepartments from "./ContactDepartments";
import ContactMapGrid from "./ContactMapGrid";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Immersive Hero */}
      <ContactHero />

      {/* 2. Global Contact Form */}
      <AboutContact />

      {/* 3. Departmental Contact Lines */}
      <ContactDepartments />

      {/* 4. Global Locations Grid */}
      <ContactMapGrid />

      <Footer />
    </main>
  );
}
