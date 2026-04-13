"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EVHero from "./EVHero";
import EVFleetDetails from "./EVFleetDetails";
import AboutContact from "@/components/about/AboutContact";

export default function EVPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EVHero />
      <EVFleetDetails />
      <AboutContact />
      <Footer />
    </main>
  );
}
