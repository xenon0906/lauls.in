import type { Metadata } from "next";
import LogisticsDetailsPage from "@/components/logistics/LogisticsDetailsPage";

export const metadata: Metadata = {
  title: "Logistics Operations Details — Lauls Ltd",
  description:
    "Detailed overview of Lauls Ltd's logistics capabilities including fleet management, warehousing operations, and supply chain solutions.",
  openGraph: {
    title: "Logistics Operations Details — Lauls Ltd",
    description:
      "Detailed overview of Lauls Ltd's logistics capabilities including fleet management and warehousing.",
    url: "https://lauls.in/logistics/details",
  },
  alternates: { canonical: "https://lauls.in/logistics/details" },
};

export default function Page() {
  return <LogisticsDetailsPage />;
}
