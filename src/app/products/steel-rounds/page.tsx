import type { Metadata } from "next";
import SteelRoundsPage from "@/components/products/SteelRoundsPage";

export const metadata: Metadata = {
  title: "Steel Rounds — Lauls Ltd",
  description:
    "High-quality alloy steel and mild steel rounds for industrial manufacturing. Precision-grade steel rounds from Lauls Ltd.",
  openGraph: {
    title: "Steel Rounds — Lauls Ltd",
    description:
      "High-quality alloy steel and mild steel rounds for industrial manufacturing. Precision-grade steel rounds from Lauls Ltd.",
    url: "https://lauls.in/products/steel-rounds",
  },
  alternates: { canonical: "https://lauls.in/products/steel-rounds" },
};

export default function Page() {
  return <SteelRoundsPage />;
}
