"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogisticsHero from "./LogisticsHero";
import LogisticsServices from "./LogisticsServices";
import LogisticsPrecisionTubes from "./LogisticsPrecisionTubes";
import AboutContact from "@/components/about/AboutContact";
import ProductFAQ from "@/components/ProductFAQ";

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <LogisticsHero />
      <LogisticsServices />
      <LogisticsPrecisionTubes />
      <AboutContact />
      <ProductFAQ
        title="Logistics — Your Questions Answered"
        subtitle="Common questions about our heavy logistics, fleet operations, warehousing, and supply chain capabilities."
        items={[
          {
            question: "What types of cargo does Lauls logistics division handle?",
            answer: "We specialize in heavy industrial cargo including steel billets, coils, wire rods, ferro alloys, heavy machinery, and over-dimensional consignments (ODC). Our fleet of 400+ vehicles includes multi-axle trailers, flatbeds, low-beds, and EV rigs designed specifically for these demanding loads."
          },
          {
            question: "Does Lauls have its own fleet or do you use third-party transporters?",
            answer: "We maintain absolute ownership of our fleet — over 400 heavy commercial vehicles — which gives us complete control over supply chain timelines. This zero third-party dependency model ensures enterprise-grade reliability for critical cargo. Our fleet is supported by 12 distribution hubs across India."
          },
          {
            question: "What is WAREX GOLD certification and why does it matter?",
            answer: "WAREX GOLD is a certification for warehousing and logistics providers that meet stringent quality and safety standards. Lauls' WAREX GOLD certified warehousing ensures your steel and alloy inventory is stored in optimal conditions with full traceability, real-time inventory management, and JIT (Just-In-Time) dispatch capabilities."
          },
          {
            question: "Do you offer pan-India logistics coverage?",
            answer: "Yes, our logistics network covers all Indian states. With 12 distribution hubs strategically located across the country, we provide end-to-end heavy logistics from steel mills to manufacturing plants, construction sites, and industrial consumers. Our dedicated fleet ensures no third-party dependencies for enterprise-critical cargo."
          },
          {
            question: "What is your approach to sustainable logistics?",
            answer: "Lauls is aggressively transitioning to green logistics with a target of 100% diesel-free fleet by 2027. We deploy heavy electric trucks (EVs) for mid-mile transport and LNG/CNG vehicles for long-haul routes. Our operations are powered by a 25MW captive solar network, creating a closed-loop sustainable transport ecosystem."
          }
        ]}
        accentColor="#DCA54C"
      />
      <Footer />
    </main>
  );
}
