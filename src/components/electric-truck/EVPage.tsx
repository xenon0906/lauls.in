"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EVHero from "./EVHero";
import EVFleetDetails from "./EVFleetDetails";
import AboutContact from "@/components/about/AboutContact";
import ProductFAQ from "@/components/ProductFAQ";

export default function EVPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <EVHero />
      <EVFleetDetails />
      <AboutContact />
      <ProductFAQ
        title="Electric Truck Fleet — Your Questions Answered"
        subtitle="Everything you need to know about our zero-emission electric truck fleet operations and green logistics commitment."
        items={[
          {
            question: "What is the payload capacity of your electric trucks?",
            answer: "Our heavy-duty electric trucks have a maximum gross payload of 55 tonnes (55T). These multi-axle electric rigs are specifically engineered for transporting steel coils, ferro alloys, and massive infrastructural components — delivering the same reliability as diesel counterparts but with zero tailpipe emissions."
          },
          {
            question: "What is the operational range of your EV fleet?",
            answer: "Our electric trucks have an operational range of 250km on a single charge, optimized for mid-mile logistics corridors. For long-haul interstate transport, we deploy LNG and CNG commercial vehicles with 800km+ range, reducing CO2 emissions by up to 30% compared to diesel. This dual approach supports our 2027 zero-diesel roadmap."
          },
          {
            question: "How do you address range anxiety for EV truck operations?",
            answer: "We own and operate an expansive proprietary network of high-speed DC fast chargers (120kW+) across key industrial corridors. Our rigorous telemetry systems use AI-routed checkpoints to predict optimal charging stops, ensuring your supply chain never halts. This smart charging network is purpose-built for heavy-duty EV logistics."
          },
          {
            question: "How does EV trucking reduce Scope 3 emissions for my business?",
            answer: "By integrating our electric fleet into your logistics network, Lauls directly reduces your corporate Scope 3 emissions — the indirect emissions in your value chain. We provide rigorous, transparent ESG reporting with real-time carbon offset dashboards, helping you meet sustainability targets while maintaining operational efficiency."
          },
          {
            question: "What LNG/CNG alternatives do you offer for long-haul transport?",
            answer: "For long-haul interstate routes requiring 800km+ range, we deploy clean-burning Liquefied Natural Gas (LNG) and Compressed Natural Gas (CNG) commercial vehicles. These heavy trucks achieve up to 30% CO2 reduction compared to diesel and serve as a critical bridge in our transition to a completely diesel-free fleet by 2027."
          }
        ]}
        accentColor="#DCA54C"
      />
      <Footer />
    </main>
  );
}
