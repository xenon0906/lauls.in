import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Lauls Ltd — 90+ Years of Industrial Excellence",
  description:
    "Discover the legacy of Lauls Ltd, Northern India's trusted industrial partner since 1933. From railway manufacturing to ferro alloys distribution.",
  openGraph: {
    title: "About Lauls Ltd — 90+ Years of Industrial Excellence",
    description:
      "Discover the legacy of Lauls Ltd, Northern India's trusted industrial partner since 1933.",
    url: "https://lauls.in/about",
  },
  alternates: { canonical: "https://lauls.in/about" },
};

export default function Page() {
  return <AboutPage />;
}
