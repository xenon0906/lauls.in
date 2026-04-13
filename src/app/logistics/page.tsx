import type { Metadata } from "next";
import LogisticsPage from "@/components/logistics/LogisticsPage";

export const metadata: Metadata = {
  title: "Logistics & Warehousing — Lauls Ltd",
  description:
    "ISO-certified logistics and warehousing solutions. Operating TATA Steel stockyards with WAREX GOLD certified warehouses across Northern India.",
  openGraph: {
    title: "Logistics & Warehousing — Lauls Ltd",
    description:
      "ISO-certified logistics and warehousing solutions. Operating TATA Steel stockyards across Northern India.",
    url: "https://lauls.in/logistics",
  },
  alternates: { canonical: "https://lauls.in/logistics" },
};

export default function Page() {
  return <LogisticsPage />;
}
