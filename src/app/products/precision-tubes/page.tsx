import type { Metadata } from "next";
import PrecisionTubesPage from "@/components/products/PrecisionTubesPage";

export const metadata: Metadata = {
  title: "Precision Tubes — Lauls Ltd",
  description:
    "ERW steel tubes and square & rectangular hollow sections. Precision-engineered tubes for structural and industrial applications.",
  openGraph: {
    title: "Precision Tubes — Lauls Ltd",
    description:
      "ERW steel tubes and square & rectangular hollow sections. Precision-engineered tubes for structural and industrial applications.",
    url: "https://lauls.in/products/precision-tubes",
  },
  alternates: { canonical: "https://lauls.in/products/precision-tubes" },
};

export default function Page() {
  return <PrecisionTubesPage />;
}
