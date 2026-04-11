"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactLocations from "@/components/contact/ContactLocations";
import AboutContact from "@/components/about/AboutContact";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Immersive Hero to support the Navbar */}
      <ContactHero />

      {/* 2. Locations & Distribution Network */}
      <ContactLocations />

      {/* 3. The Reusable Contact Form Component */}
      <AboutContact />

      <Footer />
    </main>
  );
}
