import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LogisticsDetailsHero from "@/components/logistics/LogisticsDetailsHero";
import LogisticsArticle from "@/components/logistics/LogisticsArticle";
import LogisticsFleetGallery from "@/components/logistics/LogisticsFleetGallery";
import AboutContact from "@/components/about/AboutContact";

export default function LogisticsDetailsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. Immersive Hero detailing Fleet capability */}
      <LogisticsDetailsHero />

      {/* 2. Narrative Prose / Blog Post Layout */}
      <LogisticsArticle />

      {/* 3. Visual Gallery of assets */}
      <LogisticsFleetGallery />

      {/* 4. Contact Form */}
      <AboutContact />

      <Footer />
    </main>
  );
}
