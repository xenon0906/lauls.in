"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CSRHero from "./CSRHero";
import CSRPillars from "./CSRPillars";
import AboutContact from "@/components/about/AboutContact";

export default function CSRPage() {
  return (
    <main className="min-h-screen bg-white" aria-label="CSR Initiatives">
      <Navbar />
      <article>
        <CSRHero />
        <CSRPillars />
      </article>
      <aside>
        <AboutContact />
      </aside>
      <Footer />
    </main>
  );
}
