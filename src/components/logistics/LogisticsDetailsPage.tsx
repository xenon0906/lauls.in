"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogisticsDetailsHero from "./LogisticsDetailsHero";
import LogisticsArticle from "./LogisticsArticle";
import LogisticsFleetGallery from "./LogisticsFleetGallery";
import AboutContact from "@/components/about/AboutContact";

export default function LogisticsDetailsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LogisticsDetailsHero />
      <LogisticsArticle />
      <LogisticsFleetGallery />
      <AboutContact />
      <Footer />
    </main>
  );
}
